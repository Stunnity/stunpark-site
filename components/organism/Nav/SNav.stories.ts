// Button.stories.ts
import { Meta, StoryFn } from "@storybook/vue3"
import SNav from "./SNav.vue"
import SButton from "../../atoms/button/SButton.vue"

const meta: Meta<typeof SNav> = {
    title: "Organisms/SNav",
    component: SNav,
    subcomponents: { SButton },
    argTypes: {},
}

export default meta

const Template: StoryFn = (args) => ({
    components: { SNav, SButton },
    setup() {
        return { args }
    },
    template: `
        <div style="background-color:#f7f7f7;padding:1rem 2rem">
            <SNav v-bind="args" >
                <template #action>
                    <SButton rounded="full" appearance="primary">Get Notified</SButton>
                </template>
            </SNav>
        </div>
    `,
})

export const Primary = Template.bind({})

Template.args = {
    primary: true,
    label: "ActionInputWrapper",
}
