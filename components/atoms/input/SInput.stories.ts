// Button.stories.ts
import { Meta, StoryFn } from "@storybook/vue3"
import Input from "./SInput.vue"

const meta: Meta<typeof Input> = {
    title: "Atoms/Input",
    component: Input,
    argTypes: {
        color: {
            options: ["white", "black"],
            control: "select",
            description: "Input Color",
            table: {
                type: { summary: "select" },
            },
        },
        placeholderColor: {
            options: ["gray", "white"],
            control: "select",
            description: "Placeholder Color",
            table: {
                type: { summary: "select" },
            },
        },
        value: {
            control: "text",
            description: "Input Value",
            table: {
                type: { summary: "text" },
            },
        },
        error: {
            control: "boolean",
            description: "Whether the input has an error",
            table: {
                type: { summary: "boolean" },
            },
        },
        border: {
            control: "boolean",
            description: "Whether the input has border",
            table: {
                type: { summary: "boolean" },
            },
        },
    },
}

export default meta

const Template: StoryFn = (args) => ({
    components: { Input },
    setup() {
        return { args }
    },
    template: `
        <div style="background-color:#f7f7f7;padding:1rem 2rem">
            <Input v-bind="args" :error="args.error" v-model="args.value" />
        </div>
    `,
})

export const Primary = Template.bind({})

Template.args = {
    primary: true,
    label: "Input",
}
