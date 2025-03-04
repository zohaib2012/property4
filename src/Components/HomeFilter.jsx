import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useGetAllCitiesQuery } from "../Redux/CommonApi";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Link } from "react-router-dom";
const HomeFilter = () => {
    const propertyData = [
        {
            id: 1,
            type: "House",
            tabs: [

                { label: "House" },
                { label: "Flat" },
                { label: "Farmhouse" },
                { label: "Penthouse" },

            ],
        },
        {
            id: 2,
            type: "Plot",
            tabs: [


                { label: "Plot" },
                { label: "Residential" },
                { label: "Commercial" },
                { label: "Agricultural" },
                { label: "Industrial" },

            ],
        },
        {
            id: 3,
            type: "Commercial",
            tabs: [

                { label: "Office" },
                { label: "Shop" },
                { label: "Warehouse" },
                { label: "Factory" },
                { label: "Building" },

            ],
        },
    ];
    const [City, setcity] = useState("");
    const [location, setLocation] = useState("");
    const [propertyType, setPropertyType] = useState("Any");
    const [minprice, setminPrice] = useState(1);
    const [maxprice, setmaxPrice] = useState(5000000);
    const [area, setArea] = useState("");
    const [areaUnit, setAreaUnit] = useState("");
    const navigate = useNavigate();
    const [filteredLoc, setFilteredLoc] = useState([]);
    const [filteredCities, setFilteredCities] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [showLoc, setShowLoc] = useState(false);
    const [selectedType, setSelectedType] = useState("House");
    const [activeTab, setActiveTab] = useState(0);
    const [property, setProperty] = useState("House");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const selectedData = propertyData.find((item) => item.type === selectedType);

    const toggleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };

    const handleTabSelect = (tab) => {
        setProperty(tab.label); // Update the selected value in the <select>
        setIsDropdownOpen(false); // Close the dropdown
    };
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));

    };
    const {
        data: cities
    } = useGetAllCitiesQuery({});
    const searchRef = useRef(null);  // Ref for search input
    const suggestionListRef = useRef(null);  // Ref for the suggestion list

    const handleInputChange = (e) => {
        const value = e.target.value;
        setcity(value);

        if (value) {
            const filtered = cities.filter((city) =>
                city.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredCities(filtered);
        } else {
            setFilteredCities(cities); // Show all cities if input is cleared
        }
    };
    const handleInputLoc = (e) => {
        const value = e.target.value;
        setLocation(value);

        // Use the Location array or any filtered data for locations
        if (value) {
            const filteredloc = cities.filter((loc) =>
                loc.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredLoc(filteredloc);
        } else {
            setFilteredLoc(cities); // Show all locations if input is cleared
        }
    };

    const handleLocSelect = (loc) => {
        const lowerCaseLoc = loc.toLowerCase(); // Convert location to lowercase
        setLocation(lowerCaseLoc); // Set the lowercase location
        setShowLoc(false); // Hide suggestions after selecting a location
    };


    const handleFocus = () => {
        setShowSuggestions(true);
        setFilteredCities(cities); // Show all cities on focus
    };
    const handleFocusLoc = () => {
        // setShowSuggestions(true);
        setFilteredLoc(cities); // Show all cities on focus
    };
    const handleCitySelect = (city) => {
        const lowerCaseCity = city.toLowerCase(); // Convert city to lowercase
        setcity(lowerCaseCity); // Set the lowercase city

        setShowSuggestions(false); // Close the suggestions
    };

    const handleSearchIconClick = () => {
        if (City) {
            const lowerCaseSearchTerm = City.toLowerCase(); // Convert search term to lowercase
            navigate(`/properties/${lowerCaseSearchTerm}`); // Pass lowercase city to URL
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                searchRef.current && !searchRef.current.contains(event.target) &&
                suggestionListRef.current && !suggestionListRef.current.contains(event.target)
            ) {
                setShowSuggestions(false); // Hide suggestions when clicking outside
            }
        };

        // Add event listener to detect clicks outside
        document.addEventListener('click', handleClickOutside);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
    console.log({
        City,
        location,
        property,
        area,
        areaUnit,
        minprice,
        maxprice,
    });
    
    const handleFilterSubmit = () => {
        const queryParams = new URLSearchParams();
    
        // Add city
        if (City) queryParams.append("city", City.toLowerCase());
    
        // Add location
        if (location) queryParams.append("location", location.toLowerCase());
    
        // Add property type
        if (property && property !== "Any") queryParams.append("propertyType", property.toLowerCase());
    
        // Add area size and unit
        if (area) queryParams.append("areasize", area);
        if (areaUnit) queryParams.append("areasizeunit", "marla");
    
        // Add price range
        if (minprice) queryParams.append("minprice", minprice);
        if (maxprice) queryParams.append("maxprice", maxprice);
    
        // Navigate to the new URL
        const url = `/properties?${queryParams.toString()}`;
        console.log("Navigating to:", url); // Debugging log
        navigate(url);
    };
    
    return (
        <div className="container">
            <div className="row d-flex align-items-center justify-content-center py-4">
                <div className="col-md-10">
                    <div className="row align-items-center bg-secondary p-3 rounded">
                        {/* WILAYAT */}
                        <div className="col-md-4">

                            <select
                                type="text"
                                className="form-control "
                                placeholder="Search by city or area"
                                value={City}
                                onChange={handleInputChange}
                                onFocus={handleFocus}
                                ref={searchRef}  // Add ref to input
                            >
                                {filteredCities.length > 0 ? (
                                    filteredCities.map((city, index) => (
                                        <option
                                            key={index}
                                            className="list-group-item list-group-item-action"
                                            onClick={() => handleCitySelect(city.name)}  // Handle city select, but do not navigate
                                            style={{ cursor: "pointer" }}
                                        >
                                            {city.name}
                                        </option>
                                    ))
                                ) : (
                                    <option className="list-group-item">City</option>
                                )}

                            </select>

                        </div>
                        {/* LOCATION */}
                        <div className="col-md-6">
                            <select
                                type="text"
                                className="form-control"
                                placeholder="Search by location"
                                value={location}
                                onChange={handleInputLoc}
                                onFocus={handleFocusLoc}// Show suggestions when focused
                                ref={searchRef}
                            >
                                {filteredLoc.length > 0 ? (
                                    filteredLoc.map((loc, index) => (
                                        <option
                                            key={index}
                                            className="list-group-item list-group-item-action"
                                            onClick={() => handleLocSelect(loc.name)}  // Handle location select
                                            style={{ cursor: "pointer" }}
                                        >
                                            {loc.name}
                                        </option>
                                    ))
                                ) : (
                                    <option className="list-group-item">Location</option>
                                )}
                            </select>


                        </div>
                        <div className="col-md-2">
                            {/* PROPERTY TYPE */}
                            <button className="btn btn-primary faq" onClick={handleFilterSubmit}>
                                FIND
                            </button>
                        </div>

                        {/* BED */}
                        <div className="col-md-4 pt-3">
                            <input
                                type="number"
                                className="form-control me-2"
                                placeholder="Area Size in Marla"
                                value={area}
                                onChange={(e) => setArea(e.target.value)}
                            />
                        </div>
                        <div className="col-md-4 pt-3">
                            <div className="dropdown">
                                <select
                                    className="form-control"
                                    value={property}
                                    onClick={toggleDropdown} // Open dropdown on click
                                >
                                    <option>{property}</option>
                                </select>

                                {/* Dropdown content */}
                                {isDropdownOpen && (
                                    <div className="dropdown-menu show w-100">
                                        {/* Property Type Buttons */}
                                        <div className="d-flex justify-content-around mb-3">
                                            {propertyData.map((item) => (
                                                <div className="nav-item ">
                                                    <button
                                                        key={item.id}
                                                        className={`nav-link  nav-item  ${selectedType === item.type ? "propertylink" : " "}`}
                                                        onClick={() => {
                                                            setSelectedType(item.type);
                                                            setActiveTab(0); // Reset to the first tab when changing the property type
                                                        }}
                                                    >
                                                        {item.type}
                                                    </button></div>
                                            ))}
                                        </div>

                                        {/* Tabs for Property Data */}
                                        <ul className="nav nav-tabs mb-3 row">
                                            {selectedData?.tabs.map((tab, index) => (
                                                <li className="col-md-6 my-1" key={index}>
                                                    <button
                                                        className={`btn btn-tabs ${index === activeTab ? "btn-primary" : "btn-outline-primary"}`}
                                                        onClick={() => {
                                                            setActiveTab(index);
                                                            handleTabSelect(tab); // Update select with the clicked tab's label
                                                        }}
                                                    >
                                                        {tab.label} {tab.description && <span>({tab.description})</span>}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div> 
                                )}
                            </div>
                        </div>

                        <div className="col-md-4 pt-3">

                            {/* PRICE */}
                            <div className="d-flex align-items-center">
                                <input
                                    type="number"
                                    className="form-control me-2"
                                    placeholder="Min"
                                    value={minprice}
                                    onChange={(e) =>
                                        setminPrice(e.target.value)
                                    }
                                />
                                <span>to</span>
                                <input
                                    type="number"
                                    className="form-control ms-2"
                                    placeholder="Max"
                                    value={maxprice}
                                    onChange={(e) => setmaxPrice(e.target.value)}
                                />
                            </div>
                        </div>
                        {/* FIND BUTTON */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeFilter;
