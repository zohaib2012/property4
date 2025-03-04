import React, { useState, useEffect, useRef } from 'react';

const UnitConvertor = () => {
    const [value, setValue] = useState('');
    const [unitFrom, setUnitFrom] = useState('meter');
    const [unitTo, setUnitTo] = useState('squareFeet');
    const [result, setResult] = useState(null);
    const modalRef = useRef(null);

    const conversions = {
        meterToSquareFeet: 10.764,
        squareFeetToMeter: 0.092903,
        marlaToSquareFeet: 272.25,
        squareFeetToMarla: 0.00367,
        canalToMarla: 20,
        marlaToCanal: 0.05,
        acreToSquareFeet: 43560,
        squareFeetToAcre: 1 / 43560,
        murabaToSquareFeet: 272.25,
        squareFeetToMuraba: 1 / 272.25,
    };

    const handleConvert = () => {
        let convertedValue = null;
        if (unitFrom === 'meter' && unitTo === 'squareFeet') {
            convertedValue = value * conversions.meterToSquareFeet;
        } else if (unitFrom === 'squareFeet' && unitTo === 'meter') {
            convertedValue = value * conversions.squareFeetToMeter;
        } else if (unitFrom === 'marla' && unitTo === 'squareFeet') {
            convertedValue = value * conversions.marlaToSquareFeet;
        } else if (unitFrom === 'squareFeet' && unitTo === 'marla') {
            convertedValue = value * conversions.squareFeetToMarla;
        }
        setResult(convertedValue);
    };

    // Reset state when modal is closed
    useEffect(() => {
        const modalElement = modalRef.current;

        if (modalElement) {
            const handleModalClose = () => {
                setValue('');
                setUnitFrom('meter');
                setUnitTo('squareFeet');
                setResult(null);
            };

            modalElement.addEventListener('hidden.bs.modal', handleModalClose);

            return () => {
                modalElement.removeEventListener('hidden.bs.modal', handleModalClose);
            };
        }
    }, []);

    return (
        <div>
            <div
                className="modal fade"
                id="centermodal"
                tabIndex={-1}
                role="dialog"
                aria-hidden="true"
                ref={modalRef}
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title primarytext" id="myCenterModalLabel">
                                Unit Convertor
                            </h4>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label className="form-label">Enter Value</label>
                                <input
                                    type="number"
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    className="form-control"
                                    placeholder="Value"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">From unit</label>
                                <select
                                    value={unitFrom}
                                    onChange={(e) => setUnitFrom(e.target.value)}
                                    className="form-select"
                                >
                                    <option value="meter">Meter</option>
                                    <option value="squareFeet">Square Feet</option>
                                    <option value="marla">Marla</option>
                                    <option value="canal">Canal</option>
                                    <option value="acre">Acre</option>
                                    <option value="muraba">Muraba</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">To unit</label>
                                <select
                                    value={unitTo}
                                    onChange={(e) => setUnitTo(e.target.value)}
                                    className="form-select"
                                >
                                    <option value="squareFeet">Square Feet</option>
                                    <option value="meter">Meter</option>
                                    <option value="marla">Marla</option>
                                    <option value="canal">Canal</option>
                                    <option value="acre">Acre</option>
                                    <option value="muraba">Muraba</option>
                                </select>
                            </div>
                            <button
                                onClick={handleConvert}
                                className="btn btn-primary w-100 mb-3"
                            >
                                Convert
                            </button>
                            {result !== null && (
                                <div className="text-center text-dark">
                                    <p className="fw-bold">Result: {result} {unitTo}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UnitConvertor;
