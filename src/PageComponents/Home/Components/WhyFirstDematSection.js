import React from 'react'

export default function WhyFirstDematSection() {
    return (
        <section className='custom-container-padding custom-container'>
            {
                ["bg-[#2664eb]", "bg-[#cc2b91]", "bg-[#2664eb]", "bg-[#cc2b91]"].map((color, index) => {
                    const classString = `${color} h-80 rounded-4xl sticky top-0 pb-30`
                    return (
                        <div key={index} className={classString}></div>
                    )
                })
            }
        </section>
    )
}
