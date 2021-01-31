import React from 'react';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props

    return (
        <header>
            <h1>
                <a href="/">
                    <span>brent.johnson</span>
                </a>
            </h1>
            <nav>
                <ul className="flex-row">
                    {categories.map((category) => (
                        <li
                            className={`mx-1 ${currentCategory === category}`}
                            key={category}
                        >
                            <span
                                onClick={() => {
                                    setCurrentCategory(category)
                                }}
                            >{category}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;