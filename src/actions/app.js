export const CHANGE_VALUE = 'CHANGE_VALUE';
export const CHANGE_DATE = 'CHANGE_DATE';
export const CHANGE_DAYS = 'CHANGE_DAYS';

export const changeValue = (value, name) => ({
  type: CHANGE_VALUE,
  value,
  name,
});

export const changeDate = (value) => ({
  type: CHANGE_DATE,
  value,
});

export const changeDays = (value) => ({
  type: CHANGE_DAYS,
  value,
})