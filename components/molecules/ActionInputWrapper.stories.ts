// Button.stories.ts
import { Meta, StoryFn } from "@storybook/vue3"
import ActionInputWrapper from "./ActionInputWrapper.vue"
import SInput from "../atoms/input/SInput.vue"
import SButton from "../atoms/button/SButton.vue"

const meta: Meta<typeof ActionInputWrapper> = {
    title: "Molecules/ActionInputWrapper",
    component: ActionInputWrapper,
    subcomponents: { SInput, SButton },
    argTypes: {},
}

export default meta

const Template: StoryFn = (args) => ({
    components: { ActionInputWrapper, SInput, SButton },
    setup() {
        return { args }
    },
    template: `
        <div style="background-color:#f7f7f7;padding:1rem 2rem">
            <ActionInputWrapper v-bind="args" >
                <template #input>
                    <SInput color="black" :border="false" />
                </template>
                <template #action>
                    <SButton rounded="full" appearance="secondary">Submit</SButton>
                </template>
            </ActionInputWrapper>
        </div>
    `,
})

export const Primary = Template.bind({})

Template.args = {
    primary: true,
    label: "ActionInputWrapper",
}
