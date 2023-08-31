import Bridge from "./bridge";

export default {
    title: "Molecules/Bridge",
    component: Bridge
};

export const Text = {
    args: {
        content: {
            "id": "6a19df7d-0d02-44fb-9ae9-b082501c880b",
            "contentType": "TEXT",
            "content": "Content",
            "isHtml": false
        }
    },
};

export const Button = {
    args: {
        "content": {
            "id": "cab49fd5-55e9-4f4c-af92-f8bfd04f14d7",
            "contentType": "BUTTON",
            "title": "Button",
            "link": "http://www.example.com"
        },
    }
}

export const RELATED_CONTENT = {
    args: {
        content: {
            contentType: "RELATED_CONTENT"
        }
    }
}


export const IMAGE = {
    args: {
        content: {
            contentType: "IMAGE"
        }
    }
}

export const VIDEO = {
    args: {
        content: {
            contentType: "VIDEO"
        }
    }
}

export const COLLECTION = {
    args: {
        content: {
            contentType: "COLLECTION"
        }
    }
}

export const CUSTOM = {
    args: {
        content: {
            contentType: "CUSTOM"
        }
    }
}

export const FEED = {
    args: {
        content: {
            contentType: "FEED"
        }
    }
}

export const FORM = {
    args: {
        content: {
            contentType: "FORM"
        }
    }
}

export const GALLERY = {
    args: {
        content: {
            contentType: "GALLERY"
        }
    }
}

export const LIVE_BLOG = {
    args: {
        content: {
            contentType: "LIVE_BLOG"
        }
    }
}

export const POLL = {
    args: {
        content: {
            contentType: "POLL"
        }
    }
}

export const QUOTE = {
    args: {
        content: {
            contentType: "QUOTE"
        }
    }
}
