import React from "react"
import logo from "../Images/logo2.png"

let data = [{
    title: 'Kutuma',
    subTitle: 'Cluj County',
    items: [{
        title: 'Zabava',
        description: 'Lager / ABV 5,50% / 500ml',
        price: 18.00
    }, {
        title: 'Zabava',
        description: 'Lager / ABV 5,50% / 500ml',
        price: 18.00
    }, {
        title: 'Zabava',
        description: 'Lager / ABV 5,50% / 500ml',
        price: 18.00
    }, {
        title: 'Zabava',
        description: 'Lager / ABV 5,50% / 500ml',
        price: 18.00
    }, {
        title: 'Zabava',
        description: 'Lager / ABV 5,50% / 500ml',
        price: 18.00
    }]
}, {
    title: 'Hophead',
    subTitle: 'Cluj County',
    items: [{
        title: 'Zabava',
        description: 'Lager / ABV 5,50% / 500ml',
        price: 18.00
    }, {
        title: 'Zabava',
        description: 'Lager / ABV 5,50% / 500ml',
        price: 18.00
    }, {
        title: 'Zabava',
        description: 'Lager / ABV 5,50% / 500ml',
        price: 18.00
    }, {
        title: 'Zabava',
        description: 'Lager / ABV 5,50% / 500ml',
        price: 18.00
    }, {
        title: 'Zabava',
        description: 'Lager / ABV 5,50% / 500ml',
        price: 18.00
    }]
}]

export default function Menu() {
    return (
        <div className={"menuWrapper"}>
            <div className={"logoImage"}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={"menu"}>
                {data.map((shop, index) => (
                    <section key={index}>
                        <h5><span className={"title"}>{shop.title}</span> <sup className={"subTitle"}>{shop.subTitle}</sup></h5>
                        {shop.items.map((item, innerIndex) => (
                            <div className="item" key={innerIndex}>
                                <div className={"itemCombine"}>
                                    <span className={"itemTitle"}>{item.title}</span>
                                    <span className={"itemPrice"}>...{item.price.toFixed(Math.max(2, (item.price.toString().split('.')[1] || []).length))} LEI</span>
                                </div>
                                <span className={"itemDescription"}>{item.description}</span>
                            </div>
                        ))}
                    </section>
                ))}
            </div>
        </div>
    )
}