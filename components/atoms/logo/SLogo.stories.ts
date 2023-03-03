// Button.stories.ts
import { Meta, StoryFn } from "@storybook/vue3"
import SLogo from "./SLogo.vue"

const meta: Meta<typeof SLogo> = {
    title: "Atoms/Logo",
    component: SLogo,
}

export default meta

const Template: StoryFn = (args) => ({
    components: { SLogo },
    setup() {
        return { args }
    },
    template: `
        <div style="background-color:#f7f7f7;padding:1rem 2rem">
            <SLogo v-bind="args" />
        </div>
    `,
})

export const Primary = Template.bind({})

Template.args = {
    primary: true,
    label: "Logo",
}
