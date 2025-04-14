import React, { useState } from 'react'
import { TfiAngleDown, TfiAngleUp } from "react-icons/tfi";
import "./index.css"
const FilterList = () => {
    const [isIdelFor, setIsIdelFor] = useState(false)
    const [IsOccasion, setIsOccasion] = useState(false)
    const [isWork, setIsWork] = useState(false)
    const [isFabric, setIsFabric] = useState(false)
    const [isSegment, setIsSegment] = useState(false)
    const [isSuitableFor, setIsSuitableFor] = useState(false)
    const [isRawMaterials, setIsRawMaterials] = useState(false)
    const [isPattern, setIsPattern] = useState(false)
    return (
        <div>
            <div className='customizble-checkbox-container'>
                <input className='customizble-checkbox' type="checkbox" />
                <p>CUSTOMIZBLE</p>
            </div>
            <hr />
            <div className='dropdown'>
                <div>
                    <div className='dropdown-alignment' onClick={() => setIsIdelFor((prevState) => !prevState)}>
                        <button className='dropdown-button text-button'>IDEAL FOR</button>
                        <div>{isIdelFor ? <TfiAngleUp /> : <TfiAngleDown />}</div>
                    </div>
                    <p className='all-text-para'>All</p>
                    {isIdelFor &&
                        <div>
                            <ul className='filter-unordered-container' name="filter-unordered-container">
                                <li ><button className='text-button unselect-button'>Unselect all</button></li>
                                <li><input type="checkbox" className='' id="men" /><label htmlFor='men'>Men</label></li>
                                <li><input type="checkbox" className='' id="women" /><label htmlFor='women'>Women</label></li>
                                <li><input type="checkbox" className='' id="kids" /><label htmlFor='kids'>Baby & Kids</label></li>
                            </ul>
                        </div>}
                </div>
                <div>
                    <div className='dropdown-alignment' onClick={() => setIsOccasion((prevState) => !prevState)}>
                        <div><button className='dropdown-button text-button'>OCCASION</button></div>
                        <div>{IsOccasion ? <TfiAngleUp /> : <TfiAngleDown />}</div>
                    </div>
                    <p className='all-text-para'>All</p>
                    {IsOccasion &&
                        <div>
                            <ul className='filter-unordered-container' name="filter-unordered-container">
                                <li ><button className='text-button unselect-button'>Unselect all</button></li>
                                <li><input type="checkbox" className='' id="work" /><label htmlFor='work'>work</label></li>
                            </ul>
                        </div>}
                </div>
                <div>
                    <div className='dropdown-alignment' onClick={() => setIsWork((prevState) => !prevState)}>
                        <div><button className='dropdown-button text-button'>WORK</button></div>
                        <div>{isWork ? <TfiAngleUp /> : <TfiAngleDown />}</div>
                    </div>
                    <p className='all-text-para'>All</p>
                    {isWork &&
                        <div>
                            <ul className='filter-unordered-container' name="filter-unordered-container">
                                <li ><button className='text-button unselect-button'>Unselect all</button></li>
                                <li><input type="checkbox" className='' id="men" /><label htmlFor='men'>Casual</label></li>
                                <li><input type="checkbox" className='' id="women" /><label htmlFor='women'>fabric</label></li>
                                <li><input type="checkbox" className='' id="kids" /><label htmlFor='kids'>Wedding</label></li>
                            </ul>
                        </div>}
                </div>
                <div>
                    <div className='dropdown-alignment' onClick={() => setIsFabric((prevState) => !prevState)}>
                        <div><button className='dropdown-button text-button'>FABRIC</button></div>
                        <div>{isFabric ? <TfiAngleUp /> : <TfiAngleDown />}</div>
                    </div>
                    <p className='all-text-para'>All</p>
                    {isFabric &&
                        <div>
                            <ul className='filter-unordered-container' name="filter-unordered-container">
                                <li ><button className='text-button unselect-button'>Unselect all</button></li>
                                <li><input type="checkbox" className='' id="men" /><label htmlFor='men'>Men</label></li>
                                <li><input type="checkbox" className='' id="women" /><label htmlFor='women'>Women</label></li>
                                <li><input type="checkbox" className='' id="kids" /><label htmlFor='kids'>Baby & Kids</label></li>
                            </ul>
                        </div>}
                </div>
                <div>
                    <div className='dropdown-alignment' onClick={() => setIsSegment((prevState) => !prevState)}>
                        <div><button className='dropdown-button text-button'>SEGMENT</button></div>
                        <div>{isSegment ? <TfiAngleUp /> : <TfiAngleDown />}</div>
                    </div>
                    <p className='all-text-para'>All</p>
                    {isSegment &&
                        <div>
                            <ul className='filter-unordered-container' name="filter-unordered-container">
                                <li ><button className='text-button unselect-button'>Unselect all</button></li>
                                <li><input type="checkbox" className='' id="men" /><label htmlFor='men'>Men</label></li>
                                <li><input type="checkbox" className='' id="women" /><label htmlFor='women'>Women</label></li>
                                <li><input type="checkbox" className='' id="kids" /><label htmlFor='kids'>Baby & Kids</label></li>
                            </ul>
                        </div>}
                </div>
                <div>
                    <div className='dropdown-alignment' onClick={() => setIsSuitableFor((prevState) => !prevState)}>
                        <div><button className='dropdown-button text-button'>SUITABLE FOR</button></div>
                        <div>{isSuitableFor ? <TfiAngleUp /> : <TfiAngleDown />}</div>
                    </div>
                    <p className='all-text-para'>All</p>
                    {isSuitableFor &&
                        <div>
                            <ul className='filter-unordered-container' name="filter-unordered-container">
                                <li ><button className='text-button unselect-button'>Unselect all</button></li>
                                <li><input type="checkbox" className='' id="men" /><label htmlFor='men'>Men</label></li>
                                <li><input type="checkbox" className='' id="women" /><label htmlFor='women'>Women</label></li>
                                <li><input type="checkbox" className='' id="kids" /><label htmlFor='kids'>Baby & Kids</label></li>
                            </ul>
                        </div>}
                </div>
                <div>
                    <div className='dropdown-alignment' onClick={() => setIsRawMaterials((prevState) => !prevState)}>
                        <div><button className='dropdown-button text-button'>RAW MATERIALS</button></div>
                        <div>{isRawMaterials ? <TfiAngleUp /> : <TfiAngleDown />}</div>
                    </div>
                    <p className='all-text-para'>All</p>
                    {isRawMaterials &&
                        <div>
                            <ul className='filter-unordered-container' name="filter-unordered-container">
                                <li ><button className='text-button unselect-button'>Unselect all</button></li>
                                <li><input type="checkbox" className='' id="men" /><label htmlFor='men'>Men</label></li>
                                <li><input type="checkbox" className='' id="women" /><label htmlFor='women'>Women</label></li>
                                <li><input type="checkbox" className='' id="kids" /><label htmlFor='kids'>Baby & Kids</label></li>
                            </ul>
                        </div>}
                </div>
                <div>
                    <div className='dropdown-alignment' onClick={() => setIsPattern((prevState) => !prevState)}>
                        <div><button className='dropdown-button text-button'>PATTERN</button></div>
                        <div>{isPattern ? <TfiAngleUp /> : <TfiAngleDown />}</div>
                    </div>
                    <p className='all-text-para'>All</p>
                    {isPattern &&
                        <div>
                            <ul className='filter-unordered-container' name="filter-unordered-container">
                                <li ><button className='text-button unselect-button'>Unselect all</button></li>
                                <li><input type="checkbox" className='' id="men" /><label htmlFor='men'>Roll-Up Sleeve</label></li>
                                <li><input type="checkbox" className='' id="women" /><label htmlFor='women'>Regular Sleeves</label></li>
                                <li><input type="checkbox" className='' id="kids" /><label htmlFor='kids'>Long Sleeve</label></li>
                                <li><input type="checkbox" className='' id="kids" /><label htmlFor='kids'>Full Sleeve</label></li>
                            </ul>
                        </div>}
                </div>
            </div>
        </div>
    )
}

export default FilterList