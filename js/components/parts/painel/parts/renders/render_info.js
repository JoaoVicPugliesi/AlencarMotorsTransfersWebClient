import date_format_timestamp from "../../../../../helpers/date_format_timestamp.js";
import info_i from "../../../../helpers/info_i.js";

function render_info(fields, params) {

    return fields.map(([id, property, icon, prefix = '', fallback = '']) => {
        let value
        value = property
        ? params[property]
        : prefix;
        if(property === 'initial_date') value = date_format_timestamp(params.initial_date);
        if(property === 'term_date') value = date_format_timestamp(params.term_date);
        if(property === 'final_date' && params.final_date) value = date_format_timestamp(params.final_date);
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