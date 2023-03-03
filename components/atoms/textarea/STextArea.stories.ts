// Button.stories.ts
import { Meta, StoryFn } from "@storybook/vue3"
import TextArea from "./STextArea.vue"

const meta: Meta<typeof TextArea> = {
    title: "Atoms/TextArea",
    component: TextArea,
    argTypes: {
        color: {
            options: ["white", "black"],
            control: "select",
            description: "Input Color",
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
        placeholder: {
            control: "text",
            description: "Placeholder Value",
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
    },
}

export default meta

const Template: StoryFn = (args) => ({
    components: { TextArea },
    setup() {
        return { args }
    },
    template: `
        <div style="background-color:#f7f7f7;padding:1rem 2rem">
            <TextArea v-bind="args"   v-model="args.value" />
        </div>
    `,
})

export const Primary = Template.bind({})

Template.args = {
    primary: true,
    label: "Input",
}
