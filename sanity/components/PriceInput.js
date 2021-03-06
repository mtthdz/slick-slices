import React from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

// TODO: read into what PatchEvent does behind the curtains
function createPatchFrom(value) {
  return PatchEvent.from(value === '' ? unset() : set(Number(value)));
}

// Intl is a built-in fn
const formatMoney = Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
}).format;

export default function PriceInput({ type, value, onChange, inputComponent }) {
  return (
    <div>
      <h2>
        {type.title} - {value ? formatMoney(value / 100) : ''}
      </h2>
      <p>{type.description}</p>
      <input
        type={type.name}
        value={value}
        onChange={(event) => onChange(createPatchFrom(event.target.value))}
        ref={inputComponent}
      />
    </div>
  );
}

// for accessibility
PriceInput.focus = function () {
  this._inputElement.focus();
};
