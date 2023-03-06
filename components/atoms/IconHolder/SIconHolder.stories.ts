// Button.stories.ts
import { Meta, StoryFn } from "@storybook/vue3"
import IconHolder from "./SIconHolder.vue"

const meta: Meta<typeof IconHolder> = {
    title: "Atoms/IconHolder",
    component: IconHolder,
}

export default meta

const Template: StoryFn = (args) => ({
    components: { IconHolder },
    setup() {
        return { args }
    },
    template: `
        <div style="background-color:#f7f7f7;padding:1rem 2rem">
            <IconHolder v-bind="args" > <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
            <path d="M13.82 0H4.18001C2.05001 0 0.320007 1.74 0.320007 3.86V17.95C0.320007 19.75 1.61001 20.51 3.19001 19.64L8.07001 16.93C8.59001 16.64 9.43001 16.64 9.94001 16.93L14.82 19.64C16.4 20.52 17.69 19.76 17.69 17.95V3.86C17.68 1.74 15.95 0 13.82 0ZM12.01 7.75C11.04 8.1 10.02 8.28 9.00001 8.28C7.98001 8.28 6.96001 8.1 5.99001 7.75C5.60001 7.61 5.40001 7.18 5.54001 6.79C5.69001 6.4 6.12001 6.2 6.51001 6.34C8.12001 6.92 9.89001 6.92 11.5 6.34C11.89 6.2 12.32 6.4 12.46 6.79C12.6 7.18 12.4 7.61 12.01 7.75Z" fill="#FF754F"/>
            </svg> </IconHolder>
         </div>
    `,
})

export const Primary = Template.bind({})

Template.args = {
    primary: true,
    label: "IconHolder",
}
