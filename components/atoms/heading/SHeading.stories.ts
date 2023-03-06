// Button.stories.ts
import { Meta, StoryFn } from "@storybook/vue3"
import Heading from "./SHeading.vue"

const meta: Meta<typeof Heading> = {
    title: "Atoms/Heading",
    component: Heading,
    argTypes: {
        size: {
            options: ["lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl"],
            control: "select",
            defaultValue: "primary",
            table: {
                type: { summary: "select" },
            },
        },
        weight: {
            options: ["semibold", "bold", "extrabold"],
            control: "select",
            defaultValue: "bold",
            table: {
                type: { summary: "select" },
            },
        },
        color: {
            options: ["primary", "secondary", "white", "black"],
            control: "select",
            defaultValue: "primary",
            table: {
                type: { summary: "select" },
            },
        },
        default: {
            control: "text",
            description: "Slot content",
            table: {
                type: { summary: "text" },
            },
        },
    },
}

export default meta

const Template: StoryFn = (args) => ({
    components: { Heading },
    setup() {
        return { args }
    },
    template: `
        <div style="background-color:#f7f7f7;padding:1rem 2rem">
            <Heading v-bind="args" > {{args.default || 'This is a Title'}} </Heading>
        </div>
    `,
})

export const Primary = Template.bind({})

Template.args = {
    primary: true,
    label: "Heading",
}
