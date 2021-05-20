export const CHANGE_VALUE = 'CHANGE_VALUE';
export const CHANGE_DATE = 'CHANGE_DATE';
export const CHANGE_DAYS = 'CHANGE_DAYS';
export const CHANGE_IS_VALIDATE = 'CHANGE_IS_VALIDATE';
export const GO_BACK = 'GO_BACK';

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

export const changeIsValidate = () => ({
  type: CHANGE_IS_VALIDATE,
})

export const goBack = () => ({
  type: GO_BACK,
})