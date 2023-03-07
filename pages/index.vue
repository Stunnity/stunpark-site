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
                    <p class="max-w-2xl text-center text-white m-auto py-4 leading-[18px]">
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
        <main class="pt-[20.813rem] pb-[9.375rem] flex justify-center" id="about">
            <div class="flex items-center space-x-[3.75rem]">
                <div class="bg-primary max-w-[511px] rounded-[40px] pt-4">
                    <div class="p-[2.5rem]"><SHeading class="text-[2.5rem] leading-[3.063rem]" color="white">Stress-free parking experience.</SHeading></div>
                    <img src="../assets/images/stunpark-book-park-mobile-app-interface-iPhone 14 Pro.png" alt="stunpark mobile app booking interface " class="mx-auto" />
                </div>
                <div class="max-w-[560px]">
                    <SHeading class="leading-[4.313rem] text-[3.5rem]">It’s all about a new parking experience.</SHeading>
                    <p class="leading-[18px] py-4">
                        At Stunpark, we're passionate about making parking simple, convenient, and stress-free. We understand the frustration of searching for a parking spot, especially in busy urban
                        areas. That's why we created our mobile app - to help people find and book parking easily and quickly.
                    </p>
                </div>
            </div>
        </main>
        <main class="bg-secondary-light pt-[3.5rem] pb-[15.313rem]" id="features">
            <div class="max-w-[1220px] m-auto">
                <div>
                    <div><SHeading class="leading-[4.313rem] text-[3.5rem] text-center" color="secondary"> Powerful features.</SHeading></div>
                    <div class="max-w-[659px] m-auto pb-[6.125rem]">
                        <p class="leading-[18px] py-4 text-center">
                            Our mission is to provide a hassle-free parking experience for everyone. Whether you're a busy commuter, a tourist exploring a new city, or just looking for a convenient
                            spot to park, our mobile app has the best features to get you covered. We believe that everyone deserves a stress-free parking experience, and that's exactly what we aim to
                            provide.
                        </p>
                    </div>
                </div>
                <div class="grid grid-cols-4">
                    <div class="grid grid-rows-4">
                        <div>
                            <SIconHolder>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.82 2H7.18001C5.05001 2 3.32001 3.74 3.32001 5.86V19.95C3.32001 21.75 4.61001 22.51 6.19001 21.64L11.07 18.93C11.59 18.64 12.43 18.64 12.94 18.93L17.82 21.64C19.4 22.52 20.69 21.76 20.69 19.95V5.86C20.68 3.74 18.95 2 16.82 2ZM15.01 9.75C14.04 10.1 13.02 10.28 12 10.28C10.98 10.28 9.96001 10.1 8.99001 9.75C8.60001 9.61 8.40001 9.18 8.54001 8.79C8.69001 8.4 9.12001 8.2 9.51001 8.34C11.12 8.92 12.89 8.92 14.5 8.34C14.89 8.2 15.32 8.4 15.46 8.79C15.6 9.18 15.4 9.61 15.01 9.75Z"
                                        fill="#FF754F"
                                    />
                                </svg>
                            </SIconHolder>
                            <SHeading class="tex-[18px] py-2 leading-6 tracking-[0.02em]" color="secondary"> Booking Parking Slots </SHeading>
                            <p class="text-sm">A car owner can reserve a parking space at a particular park.</p>
                        </div>
                        <div>
                            <SIconHolder>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.82 2H7.18001C5.05001 2 3.32001 3.74 3.32001 5.86V19.95C3.32001 21.75 4.61001 22.51 6.19001 21.64L11.07 18.93C11.59 18.64 12.43 18.64 12.94 18.93L17.82 21.64C19.4 22.52 20.69 21.76 20.69 19.95V5.86C20.68 3.74 18.95 2 16.82 2ZM15.01 9.75C14.04 10.1 13.02 10.28 12 10.28C10.98 10.28 9.96001 10.1 8.99001 9.75C8.60001 9.61 8.40001 9.18 8.54001 8.79C8.69001 8.4 9.12001 8.2 9.51001 8.34C11.12 8.92 12.89 8.92 14.5 8.34C14.89 8.2 15.32 8.4 15.46 8.79C15.6 9.18 15.4 9.61 15.01 9.75Z"
                                        fill="#FF754F"
                                    />
                                </svg>
                            </SIconHolder>
                            <SHeading class="tex-[18px] py-2 leading-6 tracking-[0.02em]" color="secondary"> Booking Parking Slots </SHeading>
                            <p class="text-sm">A car owner can reserve a parking space at a particular park.</p>
                        </div>
                        <div>
                            <SIconHolder>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.82 2H7.18001C5.05001 2 3.32001 3.74 3.32001 5.86V19.95C3.32001 21.75 4.61001 22.51 6.19001 21.64L11.07 18.93C11.59 18.64 12.43 18.64 12.94 18.93L17.82 21.64C19.4 22.52 20.69 21.76 20.69 19.95V5.86C20.68 3.74 18.95 2 16.82 2ZM15.01 9.75C14.04 10.1 13.02 10.28 12 10.28C10.98 10.28 9.96001 10.1 8.99001 9.75C8.60001 9.61 8.40001 9.18 8.54001 8.79C8.69001 8.4 9.12001 8.2 9.51001 8.34C11.12 8.92 12.89 8.92 14.5 8.34C14.89 8.2 15.32 8.4 15.46 8.79C15.6 9.18 15.4 9.61 15.01 9.75Z"
                                        fill="#FF754F"
                                    />
                                </svg>
                            </SIconHolder>
                            <SHeading class="tex-[18px] py-2 leading-6 tracking-[0.02em]" color="secondary"> Booking Parking Slots </SHeading>
                            <p class="text-sm">A car owner can reserve a parking space at a particular park.</p>
                        </div>
                        <div>
                            <SIconHolder>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.82 2H7.18001C5.05001 2 3.32001 3.74 3.32001 5.86V19.95C3.32001 21.75 4.61001 22.51 6.19001 21.64L11.07 18.93C11.59 18.64 12.43 18.64 12.94 18.93L17.82 21.64C19.4 22.52 20.69 21.76 20.69 19.95V5.86C20.68 3.74 18.95 2 16.82 2ZM15.01 9.75C14.04 10.1 13.02 10.28 12 10.28C10.98 10.28 9.96001 10.1 8.99001 9.75C8.60001 9.61 8.40001 9.18 8.54001 8.79C8.69001 8.4 9.12001 8.2 9.51001 8.34C11.12 8.92 12.89 8.92 14.5 8.34C14.89 8.2 15.32 8.4 15.46 8.79C15.6 9.18 15.4 9.61 15.01 9.75Z"
                                        fill="#FF754F"
                                    />
                                </svg>
                            </SIconHolder>
                            <SHeading class="tex-[18px] py-2 leading-6 tracking-[0.02em]" color="secondary"> Booking Parking Slots </SHeading>
                            <p class="text-sm">A car owner can reserve a parking space at a particular park.</p>
                        </div>
                    </div>
                    <div class="col-span-2"><img src="../assets/images/stunpark-mob-app-payment-page.png" alt="stunpark mobile application payment page" /></div>
                    <div class="grid grid-rows-4">
                        <div>
                            <SIconHolder>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.82 2H7.18001C5.05001 2 3.32001 3.74 3.32001 5.86V19.95C3.32001 21.75 4.61001 22.51 6.19001 21.64L11.07 18.93C11.59 18.64 12.43 18.64 12.94 18.93L17.82 21.64C19.4 22.52 20.69 21.76 20.69 19.95V5.86C20.68 3.74 18.95 2 16.82 2ZM15.01 9.75C14.04 10.1 13.02 10.28 12 10.28C10.98 10.28 9.96001 10.1 8.99001 9.75C8.60001 9.61 8.40001 9.18 8.54001 8.79C8.69001 8.4 9.12001 8.2 9.51001 8.34C11.12 8.92 12.89 8.92 14.5 8.34C14.89 8.2 15.32 8.4 15.46 8.79C15.6 9.18 15.4 9.61 15.01 9.75Z"
                                        fill="#FF754F"
                                    />
                                </svg>
                            </SIconHolder>
                            <SHeading class="tex-[18px] py-2 leading-6 tracking-[0.02em]" color="secondary"> Booking Parking Slots </SHeading>
                            <p class="text-sm">A car owner can reserve a parking space at a particular park.</p>
                        </div>
                        <div>
                            <SIconHolder>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.82 2H7.18001C5.05001 2 3.32001 3.74 3.32001 5.86V19.95C3.32001 21.75 4.61001 22.51 6.19001 21.64L11.07 18.93C11.59 18.64 12.43 18.64 12.94 18.93L17.82 21.64C19.4 22.52 20.69 21.76 20.69 19.95V5.86C20.68 3.74 18.95 2 16.82 2ZM15.01 9.75C14.04 10.1 13.02 10.28 12 10.28C10.98 10.28 9.96001 10.1 8.99001 9.75C8.60001 9.61 8.40001 9.18 8.54001 8.79C8.69001 8.4 9.12001 8.2 9.51001 8.34C11.12 8.92 12.89 8.92 14.5 8.34C14.89 8.2 15.32 8.4 15.46 8.79C15.6 9.18 15.4 9.61 15.01 9.75Z"
                                        fill="#FF754F"
                                    />
                                </svg>
                            </SIconHolder>
                            <SHeading class="tex-[18px] py-2 leading-6 tracking-[0.02em]" color="secondary"> Booking Parking Slots </SHeading>
                            <p class="text-sm">A car owner can reserve a parking space at a particular park.</p>
                        </div>
                        <div>
                            <SIconHolder>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.82 2H7.18001C5.05001 2 3.32001 3.74 3.32001 5.86V19.95C3.32001 21.75 4.61001 22.51 6.19001 21.64L11.07 18.93C11.59 18.64 12.43 18.64 12.94 18.93L17.82 21.64C19.4 22.52 20.69 21.76 20.69 19.95V5.86C20.68 3.74 18.95 2 16.82 2ZM15.01 9.75C14.04 10.1 13.02 10.28 12 10.28C10.98 10.28 9.96001 10.1 8.99001 9.75C8.60001 9.61 8.40001 9.18 8.54001 8.79C8.69001 8.4 9.12001 8.2 9.51001 8.34C11.12 8.92 12.89 8.92 14.5 8.34C14.89 8.2 15.32 8.4 15.46 8.79C15.6 9.18 15.4 9.61 15.01 9.75Z"
                                        fill="#FF754F"
                                    />
                                </svg>
                            </SIconHolder>
                            <SHeading class="tex-[18px] py-2 leading-6 tracking-[0.02em]" color="secondary"> Booking Parking Slots </SHeading>
                            <p class="text-sm">A car owner can reserve a parking space at a particular park.</p>
                        </div>
                        <div>
                            <SIconHolder>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.82 2H7.18001C5.05001 2 3.32001 3.74 3.32001 5.86V19.95C3.32001 21.75 4.61001 22.51 6.19001 21.64L11.07 18.93C11.59 18.64 12.43 18.64 12.94 18.93L17.82 21.64C19.4 22.52 20.69 21.76 20.69 19.95V5.86C20.68 3.74 18.95 2 16.82 2ZM15.01 9.75C14.04 10.1 13.02 10.28 12 10.28C10.98 10.28 9.96001 10.1 8.99001 9.75C8.60001 9.61 8.40001 9.18 8.54001 8.79C8.69001 8.4 9.12001 8.2 9.51001 8.34C11.12 8.92 12.89 8.92 14.5 8.34C14.89 8.2 15.32 8.4 15.46 8.79C15.6 9.18 15.4 9.61 15.01 9.75Z"
                                        fill="#FF754F"
                                    />
                                </svg>
                            </SIconHolder>
                            <SHeading class="tex-[18px] py-2 leading-6 tracking-[0.02em]" color="secondary"> Booking Parking Slots </SHeading>
                            <p class="text-sm">A car owner can reserve a parking space at a particular park.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
