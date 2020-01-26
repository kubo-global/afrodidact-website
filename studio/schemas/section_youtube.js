export default {
    "type": "object",
    "name": "section_youtube",
    "title": "Youtube Section",
    "fields": [
        {
            "type": "string",
            "name": "section_id",
            "title": "Element ID of this section",
            "description": "The element ID can be used to link to this section from another section",
            "validation": null
        },
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The YouTube URL",
            "validation": null
        },
        {
            "type": "string",
            "name": "url",
            "title": "Url",
            "description": "The YouTube URL",
            "validation": null
        },
        {
            "type": "string",
            "name": "type",
            "title": "Reference Type Name",
            "description": "Name of the Stackbit object model, used by fields of type reference",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "section_youtube"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "object"
                ]
            }
        }
    ],
    "preview": {
        "select": {
            "title": "title"
        }
    }
}