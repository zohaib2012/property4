import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useNavigate } from "react-router-dom";

const BrowseProperties = () => {
  const navigate = useNavigate();

  const propertyData = [
    {
      id: 1,
      type: "House",
      tabs: [
        {
          name: "Popular",
          categories: [
            { label: "1", unit: "kanal" },
            { label: "15", unit: "marla" },
            { label: "10", unit: "marla" },
            { label: "8", unit: "marla" },
            { label: "5", unit: "marla" },
            { label: "3", unit: "marla" },
          ],
        },
        {
          name: "Type",
          categories: [
            { label: "Houses" },
            { label: "Flats" },
            { label: "Farmhouse" },
            { label: "Penthouse" },
          ],
        },
      ],
    },
    {
      id: 2,
      type: "Plot",
      tabs: [
        {
          name: "Popular",
          categories: [
            { label: "1", unit: "kanal", description: "Plot" },
            { label: "15", unit: "marla", description: "Plot" },
            { label: "10", unit: "marla", description: "Plot" },
            { label: "8", unit: "marla", description: "Plot" },
            { label: "5", unit: "marla", description: "Plot" },
            { label: "3", unit: "marla", description: "Plot" },
          ],
        },
        {
          name: "Type",
          categories: [
            { label: "Residential", description: "Plot" },
            { label: "Commercial", description: "Plot" },
            { label: "Agricultural", description: "Plot" },
            { label: "Industrial", description: "Plot" },
          ],
        },
      ],
    },
    {
      id: 3,
      type: "Commercial",
      tabs: [
        {
          name: "Type",
          categories: [
            { label: "Office" },
            { label: "Shop" },
            { label: "Warehouse" },
            { label: "Factory" },
            { label: "Building" },
          ],
        },
      ],
    },
  ];

  const handleCategoryClick = (categoryLabel, propertyType, tabName, unit) => {
    const queryParams = new URLSearchParams();
    
    // Format labels to be lowercase and remove spaces
    const formattedCategoryLabel = categoryLabel ? categoryLabel.toLowerCase().replace(/\s+/g, "") : "";
    const formattedPropertyType = propertyType ? propertyType.toLowerCase().replace(/\s+/g, "-") : "";
    const formattedUnit = unit ? unit.toLowerCase().replace(/\s+/g, "") : "";
    
    // Construct query parameters based on tab and category selection
    if (tabName === "Type") {
      queryParams.append("propertyType", formattedCategoryLabel);  // Only property type for "Type" tab
    } else {
      if (formattedPropertyType) queryParams.append("propertyType", formattedPropertyType);
      if (formattedCategoryLabel) queryParams.append("category", formattedCategoryLabel);
      if (formattedUnit) queryParams.append("unit", formattedUnit);
    }

    // Construct the URL with query parameters
    const url = `/properties?${queryParams.toString()}`;
    console.log("Navigating to:", url);  // Debugging log
    navigate(url);
  };

  return (
    <div className="container py-4">
      <div className="row">
        {propertyData.map((property) => (
          <div className="col-md-4" key={property.id}>
            <div className="card propertytabcard">
              <div className="card-header bg-primary">
                <h4>{property.type}</h4>
              </div>
              <div className="card-body">
                <Tabs defaultActiveKey={property.tabs[0]?.name} className="mb-3" fill>
                  {property.tabs.map((tab, tabIndex) => (
                    <Tab eventKey={tab.name} title={tab.name} key={tabIndex}>
                      <div className="row g-2">
                        {tab.categories.map((category, categoryIndex) => (
                          <div className="col-md-4 col-sm-4" key={categoryIndex}>
                            <div
                              className="text-center tab btn-secondary"
                              onClick={() =>
                                handleCategoryClick(
                                  category.label,
                                  property.type,
                                  tab.name,
                                  category.unit
                                )
                              }
                              title={category.description || category.label}
                            >
                              <p className="py-3">{category.label}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Tab>
                  ))}
                </Tabs>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseProperties;
