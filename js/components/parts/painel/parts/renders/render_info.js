import info_i from "../../../../helpers/info_i.js";

function render_info(fields, params) {

    return fields.map(([id, property, icon, prefix = '', fallback = '']) => {

        let value = property
            ? params[property]
            : prefix;

        if (property && (value === null || value === undefined)) {
            value = fallback;
        }

        return info_i(
            id,
            property ? `${prefix}${value || fallback}` : value,
            icon
        );

    }).join('');
}


export default render_info;