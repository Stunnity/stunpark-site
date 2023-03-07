<template>
    <div>
        <main class="bg-primary">
            <header class="py-16">
                <SNav>
                    <template #action>
                        <SButton>Get Started</SButton>
                    </template>
                </SNav>
            </header>
            <section>
                <div><SHeading color="white" class="text-[4rem] max-w-3xl leading-[5rem] m-auto text-center" weight="semibold"> Find and book a parking space easier. </SHeading></div>
                <div>
                    <p class="max-w-2xl text-center text-white m-auto py-4">
                        Our mobile app is designed to make finding and booking parking spaces quick and easy, so you can get on with your day without the hassle of searching for a spot.
                    </p>
                </div>
                <div>
                    <div class="max-w-[22.375rem] mx-auto py-4">
                        <ActionInputWrapper class="bg-white/25">
                            <template #input>
                                <SInput placeholder-color="white" placeholder="Email Adress" :border="false" />
                            </template>
                            <template #action>
                                <SButton rounded="full" appearance="secondary">Get Started</SButton>
                            </template>
                        </ActionInputWrapper>
                    </div>
                </div>
                <div>
                    <img src="../assets/images/front-image-stunpark-mob-app.png" alt="stunpark mobile application" class="mx-auto" />
                </div>
            </section>
        </main>
        <main class="pt-[20.813rem] flex items-center space-x-[3.75rem]">
            <div class="bg-primary max-w-[511px] rounded-[40px] pt-4">
                <div class="p-[2.5rem]"><SHeading class="text-[2.5rem] leading-[3.063rem]" color="white">Stress-free parking experience.</SHeading></div>
                <img src="../assets/images/stunpark-book-park-mobile-app-interface-iPhone 14 Pro.png" alt="stunpark mobile app booking interface " class="mx-auto" />
            </div>
            <div class="max-w-[560px]">
                <SHeading class="leading-[4.313rem] text-[3.5rem]">It’s all about a new parking experience.</SHeading>
                <p>
                    At Stunpark, we're passionate about making parking simple, convenient, and stress-free. We understand the frustration of searching for a parking spot, especially in busy urban
                    areas. That's why we created our mobile app - to help people find and book parking easily and quickly.
                </p>
            </div>
        </main>
    </div>
</template>
