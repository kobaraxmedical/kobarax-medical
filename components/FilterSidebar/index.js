import React from "react";

const FilterSidebar = ({ filter, changeHandler, categories = [] }) => {
    return (
        <div className="filter-wrap">
            <div className="flex flex-wrap gap-4 items-center justify-start">
                <div className="flex-1 min-w-[200px]">
                    <select
                        name="category"
                        className="form-select w-full p-2 border rounded-md"
                        value={filter.category}
                        onChange={changeHandler}
                    >
                        <option value="">Toutes les catégories</option>
                        {categories.map((category, i) => (
                            <option key={i} value={category.name}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default FilterSidebar;
