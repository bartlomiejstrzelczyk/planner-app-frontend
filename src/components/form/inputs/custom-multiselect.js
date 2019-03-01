import React from 'react';
import Multiselect from 'react-widgets/lib/Multiselect'

const CustomMultiselect = ({ input, data, textField }) =>
  <Multiselect {...input}
    onBlur={() => input.onBlur()}
    value={input.value || []} // requires value to be an array
    data={data}
    textField={textField}
  />

export default CustomMultiselect;