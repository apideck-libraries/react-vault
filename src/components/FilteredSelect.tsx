import { FormField, FormFieldOptionGroup } from '../types/FormField';
import React, { Fragment } from 'react';
import SearchSelect, { OptionType } from './SearchSelect';

interface IProps {
  field: FormField;
  formikProps: any;
  className: string;
}

const FilteredSelect = ({ field, formikProps, className = '' }: IProps) => {
  const { handleChange, values } = formikProps;
  const { id, type, options, filter } = field;

  const filterOn = filter?.value;
  if (!filterOn) return <Fragment />;

  const filterValue: unknown = values[filterOn];
  const filterOptions = filterValue
    ? (options as FormFieldOptionGroup[])?.find(
        (optionGroup: FormFieldOptionGroup) => {
          return optionGroup.id === filterValue;
        }
      )?.options
    : [];

  return (
    <SearchSelect
      field={id}
      value={values[id]}
      handleChange={handleChange}
      placeholder="Select.."
      options={(filterOptions as OptionType[]) || []}
      isMulti={type === 'multi-select'}
      className={className}
    />
  );
};

export default FilteredSelect;
