import React from 'react'
import '../AllCss/Hero.css'
function Hero() {
    return (
        <>
            <div>
                <h5 className='fw-bold m-3 mb-2'>Hi ! Example</h5>
                <p className='mx-3 my-0 text-secondary'>Quickly Review what’s going on in your store</p>
                <div>
                    <h6 className='m-3 mb-2'>Overall Details</h6>
                    <div className='chart-board mx-3 d-flex align-items-center'>
                        <div>
                            <div className='d-flex m-2'>
                                <img src="https://demo.bagisto.com/bagisto-common/themes/admin/default/build/assets/total-sales-5b2c7b58.svg" height={60} alt="" />
                                <div className='mx-2'>
                                    <p className='fw-bold m-0'>$200.96</p>
                                    <p className='m-0' style={{ fontSize: 12 }}>Total Sales</p>
                                    <p className='m-0 ms-2 text-success fw-bold' style={{ fontSize: 12 }}>100%</p>
                                </div>
                            </div>
                            <div className='d-flex m-2'>
                                <img src="https://demo.bagisto.com/bagisto-common/themes/admin/default/build/assets/average-orders-71c4bf9a.svg" height={60} alt="" />
                                <div className='mx-2'>
                                    <p className='fw-bold m-0'>$28.71</p>
                                    <p className='m-0' style={{ fontSize: 12 }}>Average Order Sale</p>
                                    <p className='m-0 ms-2 text-success fw-bold' style={{ fontSize: 12 }}>100.00%</p>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex ' style={{ margin: 30, marginBottom: 120 }}>
                            <img src="https://demo.bagisto.com/bagisto-common/themes/admin/default/build/assets/total-orders-f1b2017e.svg" height={60} alt="" />
                            <div className='mx-2'>
                                <p className='fw-bold m-0'>7</p>
                                <p className='m-0' style={{ fontSize: 12 }}>Total Orders</p>
                                <p className='m-0 ms-2 text-success fw-bold' style={{ fontSize: 12 }}>100%</p>
                            </div>
                        </div>
                        <div className='d-flex' style={{ marginTop: 50 }}>
                            <img src="https://demo.bagisto.com/bagisto-common/themes/admin/default/build/assets/unpaid-invoices-6c51662d.svg" height={60} alt="" />
                            <div className='mx-2'>
                                <p className='fw-bold m-0'>$0.00</p>
                                <p className='m-0' style={{ fontSize: 12 }}>Total Unpaid Invoices</p>
                            </div>
                        </div>
                        <div className='d-flex' style={{ marginBottom: 90 }}>
                            <img src="https://demo.bagisto.com/bagisto-common/themes/admin/default/build/assets/customers-199df769.svg" height={60} alt="" />
                            <div className='mx-2'>
                                <p className='fw-bold m-0'>7</p>
                                <p className='m-0' style={{ fontSize: 12 }}>Total Customers</p>
                                <p className='m-0 ms-2 text-success fw-bold' style={{ fontSize: 12 }}>0%</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h6 className='m-3 mb-2'>Today's Details</h6>
                <div className='chart-board2 mx-3'>
                    <div className='chart-board1  d-flex align-items-center'>
                        <div className='d-flex m-2'>
                            <img src="https://demo.bagisto.com/bagisto-common/themes/admin/default/build/assets/total-sales-5b2c7b58.svg" height={60} alt="" />
                            <div className='mx-2'>
                                <p className='fw-bold m-0'>$0.00</p>
                                <p className='m-0' style={{ fontSize: 12 }}>Today's Sales Sales</p>
                                <p className='m-0 ms-2 text-success fw-bold' style={{ fontSize: 12 }}>0%</p>
                            </div>
                        </div>
                        <div className='d-flex '>
                            <img src="https://demo.bagisto.com/bagisto-common/themes/admin/default/build/assets/total-orders-f1b2017e.svg" height={60} alt="" />
                            <div className='mx-2'>
                                <p className='fw-bold m-0'>1</p>
                                <p className='m-0' style={{ fontSize: 12 }}>Today's Orders</p>
                                <p className='m-0 ms-2 text-success fw-bold' style={{ fontSize: 12 }}>100%</p>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <img src="https://demo.bagisto.com/bagisto-common/themes/admin/default/build/assets/customers-199df769.svg" height={60} alt="" />
                            <div className='mx-2'>
                                <p className='fw-bold m-0'>0</p>
                                <p className='m-0' style={{ fontSize: 12 }}>Today's Customers</p>
                                <p className='m-0 ms-2 text-success fw-bold' style={{ fontSize: 12 }}>0%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h6 className='mx-3 mt-4' >Stock Threshold</h6>
                <div className='chart-board2 mx-3 d-flex align-items-center my-2'>
                    <img src="https://demo.bagisto.com/bagisto-103-41-39-2/storage/product/169/PxSzTidAECXfybabjZJSHB6ZIGunlX0DpQ4vSX8e.webp" className='m-3' height={65} alt="" />
                    <div className='mb-4 me-4'>
                        <p className='m-0 fw-bold' style={{fontSize:16}}>Urban Slate Men's Grey Denim Jeans-28</p>
                        <p className='m-0' style={{fontSize:14}}>SKU - URBANSLATEMENSDENIM2023</p>
                    </div>
                    <div className='mx-4'>
                        <p className='m-0 fw-bold' style={{fontSize:16}}>$37.99</p>
                        <p className='m-0 text-danger' style={{fontSize:14}}>99 Stock</p>
                    </div>
                </div>

                <div className='chart-board2 mx-3 d-flex align-items-center my-2'>
                    <img src="https://demo.bagisto.com/bagisto-103-41-39-2/storage/product/169/PxSzTidAECXfybabjZJSHB6ZIGunlX0DpQ4vSX8e.webp" className='m-3' height={65} alt="" />
                    <div className='mb-4 me-4'>
                        <p className='m-0 fw-bold' style={{fontSize:16}}>Urban Slate Men's Grey Denim Jeans-28</p>
                        <p className='m-0' style={{fontSize:14}}>SKU - URBANSLATEMENSDENIM2023</p>
                    </div>
                    <div className='mx-4'>
                        <p className='m-0 fw-bold' style={{fontSize:16}}>$37.99</p>
                        <p className='m-0 text-danger' style={{fontSize:14}}>99 Stock</p>
                    </div>
                </div>

                <div className='chart-board2 mx-3 d-flex align-items-center my-2'>
                    <img src="https://demo.bagisto.com/bagisto-103-41-39-2/storage/product/169/PxSzTidAECXfybabjZJSHB6ZIGunlX0DpQ4vSX8e.webp" className='m-3' height={65} alt="" />
                    <div className='mb-4 me-4'>
                        <p className='m-0 fw-bold' style={{fontSize:16}}>Urban Slate Men's Grey Denim Jeans-28</p>
                        <p className='m-0' style={{fontSize:14}}>SKU - URBANSLATEMENSDENIM2023</p>
                    </div>
                    <div className='mx-4'>
                        <p className='m-0 fw-bold' style={{fontSize:16}}>$37.99</p>
                        <p className='m-0 text-danger' style={{fontSize:14}}>99 Stock</p>
                    </div>
                </div>

                <div className='chart-board2 mx-3 d-flex align-items-center my-2'>
                    <img src="https://demo.bagisto.com/bagisto-103-41-39-2/storage/product/169/PxSzTidAECXfybabjZJSHB6ZIGunlX0DpQ4vSX8e.webp" className='m-3' height={65} alt="" />
                    <div className='mb-4 me-4'>
                        <p className='m-0 fw-bold' style={{fontSize:16}}>Urban Slate Men's Grey Denim Jeans-28</p>
                        <p className='m-0' style={{fontSize:14}}>SKU - URBANSLATEMENSDENIM2023</p>
                    </div>
                    <div className='mx-4'>
                        <p className='m-0 fw-bold' style={{fontSize:16}}>$37.99</p>
                        <p className='m-0 text-danger' style={{fontSize:14}}>99 Stock</p>
                    </div>
                </div>
            </div>

            
        </>
    )
}

export default Hero
