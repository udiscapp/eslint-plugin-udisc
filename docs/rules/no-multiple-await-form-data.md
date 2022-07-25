# Prevent trying to await request.formData() in an action more than once. (no-multiple-await-form-data)

Our team ran into this issue occasionally and troubleshooting was always difficult because it is not always apparent that the formData had already been read.

## Rule Details

This rule aims to prevent bugs caused by awaiting `request.formData()` multiple times (typically during troubleshooting, e.g. by adding a console.log(await request.formData())).

Examples of **incorrect** code for this rule:

```ts

export const action: ActionFunction = async ({ request, params }) => {
	console.log(await request.formData());

	const formData = await request.formData();

	return
}

```

Examples of **correct** code for this rule:

```ts

export const action: ActionFunction = async ({ request, params }) => {
	const formData = await request.formData();

	console.log(formData)

	return
}

```

## When Not To Use It

If your request implementation allows multiple access to `request.formData` stream, then disable this rule.

## Further Reading

* MDN Request: https://developer.mozilla.org/en-US/docs/Web/API/Request#methods
* MDN Request.formData(): https://developer.mozilla.org/en-US/docs/Web/API/Request/formData
