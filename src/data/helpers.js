export function isValidHttpUrl(string) {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === 'http:' || url.protocol === 'https:';
}

export function isFormValid(formData) {
  const isValidText = formData.text.length > 0 && formData.text.length <= 200;
  const isValidSource = isValidHttpUrl(formData.source);
  const isValidCategory = formData.category.length > 0;

  return isValidText && isValidSource && isValidCategory;
}

export function resetFormFields(setFormData) {
  setFormData({
    text: '',
    source: '',
    category: '',
  });
}
