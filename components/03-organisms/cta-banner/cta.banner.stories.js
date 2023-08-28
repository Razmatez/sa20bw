import CtaBanner from "./cta-banner"

export default {
    title: "Organisms/CtaBanner",
    component: CtaBanner,
    argTypes: {},
};

export const Default = {
    name: "Cta-Banner",
    args: {
        data: [
            {
                title: "Join the SA20 Tracey!",
                description: "Experience cricket like never before: access live matches, expert statistics , match highlights, and stay up to date with everything SA20",
                button: "Join now",
                image: "https://media-cdn.incrowdsports.com/d7a0a698-aaab-4824-b4a2-7d062c76d445.png",
                category: "Poll",
                preHeader: "what is your",
                width: " w-full"
            }
        ]
    }
};

