import React, { useState } from "react";
import { useGetAllCitiesQuery, useGetPropertyTypeQuery, useGetPurposeQuery, usePropertyformMutation } from "../Redux/CommonApi";
import Select from "react-select";
// const purposes = ["Sale", "Rent"];
// const propertyTypes = ["House", "Plot", "Commercial"];


const Propertyform = () => {
    const {
        data: cities
    } = useGetAllCitiesQuery({});
    const {
        data: propertyTypes
    } = useGetPropertyTypeQuery({});
    const {
        data: purposes
    } = useGetPurposeQuery({});
    console.log(propertyTypes,"propertyTypes")
    const [formState, setFormState] = useState({
        purpose: "",
        propertytype: "",
        city: "",
        location: "",
        areasize: "",
        areasizeunit: "",
        price: "",
        advancepayment: "",
        noofinstallments: "",
        monthlyinstrallmentamount: "",
        bedroom: "1",
        bathroom: "1",
        FeatureandAmenities: "",
        title: "",
        description: "",
        number: "",
        landline: "",
        images: [],
    });



    const [errors, setErrors] = useState({});
    const [propertyform, { isLoading, isError, isSuccess }] = usePropertyformMutation();

    const validate = () => {
        const newErrors = {};
        Object.keys(formState).forEach((key) => {
            if (key === "images" && formState.images.length === 0) {
                newErrors[key] = "At least one image is required.";
            } else if (!formState[key] || formState[key].toString().trim() === "") {
                newErrors[key] = `${key} is required.`;
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        const payload = {
            ...formState,
            images: formState.images.map((file) => file), // Ensure it's a valid file object
        };
        console.log(payload)
        try {
            const response = await propertyform(payload);
            console.log("API Response:", response);
        } catch (error) {
            console.error("Error submitting the form:", error);
        }
    };


    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === "images") {
            // Check if files are selected
            if (files && files.length > 0) {
                const validFiles = Array.from(files).filter((file) =>
                    ["image/jpeg", "image/png", "image/jpg"].includes(file.type)
                );

                setFormState((prevState) => ({
                    ...prevState,
                    images: [...validFiles], // Store the valid files directly
                }));
            }
        } else {
            setFormState((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }

        // Clear error message for the field being updated
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    };



    const handleImageDelete = (indexToDelete) => {
        setFormState((prevState) => ({
            ...prevState,
            images: prevState.images.filter((_, index) => index !== indexToDelete),
        }));
    };

    const handleImagePreview = () =>
        formState.images.map((image, index) => (
            <div key={index} className="image-preview" style={{ margin: "10px", position: "relative" }}>
                <img
                    src={URL.createObjectURL(image)}
                    alt={`Preview ${index + 1}`}
                    style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                        borderRadius: "8px",
                    }}
                />
                <button
                    type="button"
                    onClick={() => handleImageDelete(index)}
                    style={{
                        position: "absolute",
                        top: "5px",
                        right: "5px",
                        background: "red",
                        color: "white",
                        border: "none",
                        borderRadius: "50%",
                        cursor: "pointer",
                        width: "20px",
                        height: "20px",
                    }}
                >
                    X
                </button>
            </div>
        ));

    return (

        <div className="container py-5 ">
            <div className="card propertycard">

                <div className="card-body">
                    <h2 className="py-4 text-center">Add Your Property at Al-Arab Real Estate</h2>
                    <form onSubmit={handleSubmit} className="py-2">

                        <div className="row addproperty-pad">
                            <div className="col-md-6">
                                <div className="form-wrap">
                                    <label className="col-form-label">Property Name</label>
                                    <input
                                        className="form-control addproperty-form"
                                        name="title"
                                        value={formState.title}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.title && (
                                        <p style={{ color: "#9E2A2B" }}>{errors.title}</p>
                                    )}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-wrap">
                                    <label className="col-form-label">Property Type</label>
                                    <select
                                        className="form-control form-c addproperty-form "
                                        name="propertytype"
                                        value={formState.propertytype}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="" disabled>
                                            Select Property Type
                                        </option>
                                        {propertyTypes?.map((optionp, index) => (
                                            <option key={optionp.id} value={optionp.type}>
                                                {optionp.type}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.propertytype && (
                                        <p style={{ color: "#9E2A2B" }}>{errors.propertytype}</p>
                                    )}
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-wrap">
                                    <label className="col-form-label">City</label>
                                    <select
                                        className="form-control form-c addproperty-form "
                                        name="city"
                                        value={formState.city}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="" disabled>
                                            Select City
                                        </option>
                                        {cities?.map((option, index) => (
                                            <option key={index} value={option.name}>
                                                {option.name}
                                            </option>
                                        ))}
                                    </select>

                                    {errors.city && (
                                        <p style={{ color: "#9E2A2B" }}>{errors.city}</p>
                                    )}
                                </div>
                            </div>


                            <div className="col-md-6">
                                <div className="form-wrap">
                                    <label className="col-form-label">Location</label>
                                    <input
                                        className="form-control addproperty-form"
                                        name="location"
                                        value={formState.location}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.areasize && (
                                        <p style={{ color: "#9E2A2B" }}>{errors.location}</p>
                                    )}
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-wrap">
                                    <label className="col-form-label">Area Size </label>
                                    <input
                                        className="form-control addproperty-form"
                                        name="areasize"
                                        type="number"
                                        value={formState.areasize}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.areasize && (
                                        <p style={{ color: "#9E2A2B" }}>{errors.areasize}</p>
                                    )}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-wrap">
                                    <label className="col-form-label">Area Size Unit</label>
                                    <input
                                        className="form-control addproperty-form"
                                        name="areasizeunit"
                                        value={formState.areasizeunit}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.areasizeunit && (
                                        <p style={{ color: "#9E2A2B" }}>{errors.areasizeunit}</p>
                                    )}
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-wrap">
                                    <label className="col-form-label">Bedrooms</label>
                                    <input
                                        className="form-control addproperty-form"
                                        name="bedroom"
                                        type="number"
                                        value={formState.bedroom}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.bedroom && (
                                        <p style={{ color: "#9E2A2B" }}>{errors.bedroom}</p>
                                    )}
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-wrap">
                                    <label className="col-form-label">Bathrooms</label>
                                    <input
                                        className="form-control addproperty-form"
                                        name="bathroom"
                                        type="number"
                                        value={formState.bathroom}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.bathroom && (
                                        <p style={{ color: "#9E2A2B" }}>{errors.bathroom}</p>
                                    )}
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-wrap">
                                    <label className="col-form-label">Price in Pkr</label>
                                    <input
                                        className="form-control addproperty-form"
                                        name="price"
                                        type="number"
                                        value={formState.price}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.areasizeunit && (
                                        <p style={{ color: "#9E2A2B" }}>{errors.areasizeunit}</p>
                                    )}
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-wrap">
                                    <label className="col-form-label">Advance Payment</label>
                                    <input
                                        className="form-control addproperty-form"
                                        name="advancepayment"
                                        type="number"
                                        value={formState.advancepayment}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.advancepayment && (
                                        <p style={{ color: "#9E2A2B" }}>{errors.advancepayment}</p>
                                    )}
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-wrap">
                                    <label className="col-form-label">No of Installments</label>
                                    <input
                                        className="form-control addproperty-form"
                                        name="noofinstallments"
                                        type="number"
                                        value={formState.noofinstallments}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.noofinstallments && (
                                        <p style={{ color: "#9E2A2B" }}>{errors.noofinstallments}</p>
                                    )}
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-wrap">
                                    <label className="col-form-label">Monthly Installment Amount</label>
                                    <input
                                        className="form-control addproperty-form"
                                        name="monthlyinstrallmentamount"
                                        type="number"
                                        value={formState.monthlyinstrallmentamount}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.monthlyinstrallmentamount && (
                                        <p style={{ color: "#9E2A2B" }}>{errors.monthlyinstrallmentamount}</p>
                                    )}
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-wrap">
                                    <label className="col-form-label">Phone Number </label>
                                    <input
                                        className="form-control addproperty-form"
                                        name="number"
                                        type="number"
                                        value={formState.number}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.number && (
                                        <p style={{ color: "#9E2A2B" }}>{errors.number}</p>
                                    )}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-wrap">
                                    <label className="col-form-label">Landline Number</label>
                                    <input
                                        className="form-control addproperty-form"
                                        name="landline"
                                        type="number"
                                        value={formState.landline}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.landline && (
                                        <p style={{ color: "#9E2A2B" }}>{errors.landline}</p>
                                    )}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-wrap">
                                    <label className="col-form-label">Purpose</label>
                                    <select

                                        className="form-control form-c addproperty-form "
                                        name="purpose"
                                        value={formState.purpose}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="" disabled>
                                            Select Purpose
                                        </option>
                                        {purposes?.map((purpose) => (
                                            <option key={purpose.id} value={purpose.purpose}>
                                                {purpose.purpose}
                                            </option>
                                        ))}
                                    </select>

                                    {errors.FeatureandAmenities && (
                                        <p style={{ color: "#9E2A2B" }}>{errors.FeatureandAmenities}</p>
                                    )}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-wrap">
                                    <label className="col-form-label">Features</label>
                                    <input
                                        className="form-control addproperty-form"
                                        name="FeatureandAmenities"
                                        value={formState.FeatureandAmenities}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.FeatureandAmenities && (
                                        <p style={{ color: "#9E2A2B" }}>{errors.FeatureandAmenities}</p>
                                    )}
                                </div>
                            </div>

                            <div>Description</div>
                            <textarea
                                rows={10}
                                cols={10}
                                className="form-control form-textarea"
                                placeholder="Write about property...."
                                name="description"
                                value={formState.description}
                                onChange={handleChange}
                            />

                            <div className="form-wrap">
                                <label className="col-form-label">Upload Images</label>
                                <input
                                    className="form-control"
                                    type="file"
                                    name="images"
                                    multiple
                                    onChange={handleChange}
                                    required
                                />
                                {errors.images && <p style={{ color: "#9E2A2B" }}>{errors.images}</p>}
                            </div>

                            {/* Image Preview Section */}
                            <div className="image-preview-container" style={{ display: "flex", flexWrap: "wrap" }}>
                                {handleImagePreview()}
                            </div>


                            {/* Image Preview Section */}

                            {/* Additional fields like price, advance payment, etc. can be added similarly */}
                            <div className="text-end">
                                <button type="submit" className="btn bg-primary" disabled={isLoading}>
                                    {isLoading ? "Submitting..." : "Submit"}
                                </button>
                            </div>
                            {isError && <p style={{ color: "red" }}>Error occurred while submitting.</p>}
                            {isSuccess && <p style={{ color: "green" }}>Form submitted successfully!</p>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Propertyform;
