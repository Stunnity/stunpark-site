<template>
    <div>
        <main class="bg-primary">
            <header class="py-8 md:py-16 px-4 md:px-0">
                <SNav>
                    <template #action>
                        <SButton>Get Started</SButton>
                    </template>
                </SNav>
            </header>
            <section>
                <div class="px-4 md:px-0">
                    <SHeading color="white" class="text-[2rem] md:text-[4rem] max-w-3xl leading-[2.4rem] md:leading-[5rem] m-auto text-center" weight="semibold">
                        Find and book a parking space easier.
                    </SHeading>
                </div>
                <div class="px-4 md:px-0">
                    <p class="max-w-2xl text-sm md:text-base text-center text-white m-auto py-4 leading-[18px]">
                        Our mobile app is designed to make finding and booking parking spaces quick and easy, so you can get on with your day without the hassle of searching for a spot.
                    </p>
                </div>
                <div class="px-4 md:px-0">
                    <div class="max-w-[22.375rem] mx-auto py-4">
                        <ActionInputWrapper class="bg-white/25">
                            <template #input>
                                <SInput placeholder-color="white" placeholder="Email Adress" :border="false" />
                            </template>
                            <template #action>
                                <SButton rounded="full" appearance="secondary" class="font-medium">Get Started</SButton>
                            </template>
                        </ActionInputWrapper>
                    </div>
                </div>
                <div>
                    <img src="../assets/images/front-image-stunpark-mob-app.png" alt="stunpark mobile application" class="mx-auto sm:hidden" />
                    <img src="../assets/images/front-image-stunpark-mob-app-desktop.png" alt="stunpark mobile application" class="mx-auto hidden sm:block" />
                </div>
            </section>
        </main>
        <main class="pt-[8rem] md:pt-[20.813rem] pb-[4rem] md:pb-[9.375rem] flex justify-center px-6 md:px-4" id="about">
            <div class="flex flex-col-reverse md:flex-row items-center md:space-x-[3.75rem]">
                <div class="bg-primary max-w-[511px] rounded-[40px] pt-4">
                    <div class="p-[1.5rem] md:p-[2.5rem]">
                        <SHeading class="text-[1.5rem] md:text-[2.5rem] leading-[1.844rem] md:leading-[3.063rem] font-semibold md:font-bold" color="white">Stress-free parking experience.</SHeading>
                    </div>
                    <img src="../assets/images/stunpark-book-park-mobile-app-interface.png" alt="stunpark mobile app booking interface " class="mx-auto w-[20rem]" />
                </div>
                <div class="max-w-[560px] mb-10 md:mb-0">
                    <SHeading class="leading-[2.4rem] md:leading-[4.313rem] text-[2rem] md:text-[3.5rem] font-semibold md:font-bold">It’s all about a new parking experience.</SHeading>
                    <p class="leading-[18px] text-sm md:text-base py-4 md:font-medium">
                        At Stunpark, we're passionate about making parking simple, convenient, and stress-free. We understand the frustration of searching for a parking spot, especially in busy urban
                        areas. That's why we created our mobile app - to help people find and book parking easily and quickly.
                    </p>
                </div>
            </div>
        </main>
        <main class="bg-secondary-light pt-[3.5rem] pb-[11.313rem]" id="features">
            <div class="max-w-[1220px] m-auto">
                <div class="px-6 md:px-4">
                    <div>
                        <SHeading class="leading-[2.4rem] md:leading-[4.313rem] text-[2rem] md:text-[3.5rem] text-center font-semibold md:font-bold" color="secondary"> Powerful features.</SHeading>
                    </div>
                    <div class="max-w-[659px] m-auto pb-[6.125rem]">
                        <p class="leading-[18px] text-sm md:text-base py-4 text-center md:font-medium">
                            Our mission is to provide a hassle-free parking experience for everyone. Whether you're a busy commuter, a tourist exploring a new city, or just looking for a convenient
                            spot to park, our mobile app has the best features to get you covered. We believe that everyone deserves a stress-free parking experience, and that's exactly what we aim to
                            provide.
                        </p>
                    </div>
                </div>
                <div class="md:grid md:grid-cols-4">
                    <div class="col-span-2 md:hidden"><img class="w-[20rem]" src="../assets/images/stunpark-mob-app-payment-page.png" alt="stunpark mobile application payment page" /></div>

                    <div class="gap-y-6 md:gap-4 grid grid-rows-4 px-6 md:px-4">
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
                            <p class="text-sm md:font-medium">A car owner can reserve a parking space at a particular park.</p>
                        </div>
                        <div>
                            <SIconHolder>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.88003 4.59997C8.08003 1.13997 2.87002 1.12997 2.07002 4.59997C1.60002 6.62997 2.89003 8.34997 4.01003 9.41997C4.83003 10.19 6.12003 10.19 6.94003 9.41997C8.06003 8.34997 9.34003 6.62997 8.88003 4.59997ZM5.51003 6.19997C4.96003 6.19997 4.51003 5.74997 4.51003 5.19997C4.51003 4.64997 4.95003 4.19997 5.50003 4.19997H5.51003C6.07003 4.19997 6.51003 4.64997 6.51003 5.19997C6.51003 5.74997 6.07003 6.19997 5.51003 6.19997Z"
                                        fill="#FF754F"
                                    />
                                    <path
                                        d="M21.91 16.6C21.11 13.14 15.88 13.13 15.07 16.6C14.6 18.63 15.89 20.35 17.02 21.42C17.84 22.19 19.14 22.19 19.96 21.42C21.09 20.35 22.38 18.63 21.91 16.6ZM18.53 18.2C17.98 18.2 17.53 17.75 17.53 17.2C17.53 16.65 17.97 16.2 18.52 16.2H18.53C19.08 16.2 19.53 16.65 19.53 17.2C19.53 17.75 19.08 18.2 18.53 18.2Z"
                                        fill="#FF754F"
                                    />
                                    <path
                                        d="M11.9999 19.75H9.31994C8.15994 19.75 7.14994 19.05 6.74994 17.97C6.33994 16.89 6.63994 15.7 7.50994 14.93L15.4999 7.94C15.9799 7.52 15.9899 6.95 15.8499 6.56C15.6999 6.17 15.3199 5.75 14.6799 5.75H11.9999C11.5899 5.75 11.2499 5.41 11.2499 5C11.2499 4.59 11.5899 4.25 11.9999 4.25H14.6799C15.8399 4.25 16.8499 4.95 17.2499 6.03C17.6599 7.11 17.3599 8.3 16.4899 9.07L8.49994 16.06C8.01994 16.48 8.00994 17.05 8.14994 17.44C8.29994 17.83 8.67994 18.25 9.31994 18.25H11.9999C12.4099 18.25 12.7499 18.59 12.7499 19C12.7499 19.41 12.4099 19.75 11.9999 19.75Z"
                                        fill="#FF754F"
                                    />
                                </svg>
                            </SIconHolder>
                            <SHeading class="tex-[18px] py-2 leading-6 tracking-[0.02em]" color="secondary"> Locating and getting directions to a park </SHeading>
                            <p class="text-sm md:font-medium">A car owner can get directions to the desired parking through our app.</p>
                        </div>
                        <div>
                            <SIconHolder>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M22 7.5499C22 8.2099 21.46 8.7499 20.8 8.7499H3.2C2.54 8.7499 2 8.2099 2 7.5499V7.5399C2 5.2499 3.85 3.3999 6.14 3.3999H17.85C20.14 3.3999 22 5.2599 22 7.5499Z"
                                        fill="#FF754F"
                                    />
                                    <path
                                        d="M2 11.45V16.46C2 18.75 3.85 20.6 6.14 20.6H17.85C20.14 20.6 22 18.74 22 16.45V11.45C22 10.79 21.46 10.25 20.8 10.25H3.2C2.54 10.25 2 10.79 2 11.45ZM8 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.41 15.75 8.75 16.09 8.75 16.5C8.75 16.91 8.41 17.25 8 17.25ZM14.5 17.25H10.5C10.09 17.25 9.75 16.91 9.75 16.5C9.75 16.09 10.09 15.75 10.5 15.75H14.5C14.91 15.75 15.25 16.09 15.25 16.5C15.25 16.91 14.91 17.25 14.5 17.25Z"
                                        fill="#FF754F"
                                    />
                                </svg>
                            </SIconHolder>
                            <SHeading class="tex-[18px] py-2 leading-6 tracking-[0.02em]" color="secondary"> StunCard </SHeading>
                            <p class="text-sm md:font-medium">A storage of money for paying parking charges and also a pass allowing one to get in and out of the parks.</p>
                        </div>
                        <div>
                            <SIconHolder>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M22 11.25H19.96C19.6 7.44 16.56 4.39 12.75 4.04V2C12.75 1.59 12.41 1.25 12 1.25C11.59 1.25 11.25 1.59 11.25 2V4.04C7.44 4.4 4.39 7.44 4.04 11.25H2C1.59 11.25 1.25 11.59 1.25 12C1.25 12.41 1.59 12.75 2 12.75H4.04C4.4 16.56 7.44 19.61 11.25 19.96V22C11.25 22.41 11.59 22.75 12 22.75C12.41 22.75 12.75 22.41 12.75 22V19.96C16.56 19.6 19.61 16.56 19.96 12.75H22C22.41 12.75 22.75 12.41 22.75 12C22.75 11.59 22.41 11.25 22 11.25ZM12 15.12C10.28 15.12 8.88 13.72 8.88 12C8.88 10.28 10.28 8.88 12 8.88C13.72 8.88 15.12 10.28 15.12 12C15.12 13.72 13.72 15.12 12 15.12Z"
                                        fill="#FF754F"
                                    />
                                </svg>
                            </SIconHolder>
                            <SHeading class="tex-[18px] py-2 leading-6 tracking-[0.02em]" color="secondary"> Tracking parking slots availability </SHeading>
                            <p class="text-sm md:font-medium">The user will be able to view the number of parking slots available at a desired parking.</p>
                        </div>
                    </div>
                    <div class="col-span-2 hidden md:block px-6 md:px-4"><img src="../assets/images/stunpark-mob-app-payment-page-desktop.png" alt="stunpark mobile application payment page" /></div>
                    <div class="gap-y-6 md:gap-4 grid grid-rows-4 px-6 md:px-4">
                        <div>
                            <SIconHolder>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M21.67 6.95003C21.03 4.78003 19.22 2.97003 17.05 2.33003C15.4 1.85003 14.26 1.89003 13.47 2.48003C12.52 3.19003 12.41 4.47003 12.41 5.38003V7.87003C12.41 10.33 13.53 11.58 15.73 11.58H18.6C19.5 11.58 20.79 11.47 21.5 10.52C22.11 9.74003 22.16 8.60003 21.67 6.95003Z"
                                        fill="#FF754F"
                                    />
                                    <path
                                        d="M18.91 13.36C18.65 13.06 18.27 12.89 17.88 12.89H14.3C12.54 12.89 11.11 11.46 11.11 9.70003V6.12003C11.11 5.73003 10.94 5.35003 10.64 5.09003C10.35 4.83003 9.94999 4.71003 9.56999 4.76003C7.21999 5.06003 5.05999 6.35003 3.64999 8.29003C2.22999 10.24 1.70999 12.62 2.15999 15C2.80999 18.44 5.55999 21.19 9.00999 21.84C9.55999 21.95 10.11 22 10.66 22C12.47 22 14.22 21.44 15.71 20.35C17.65 18.94 18.94 16.78 19.24 14.43C19.29 14.04 19.17 13.65 18.91 13.36Z"
                                        fill="#FF754F"
                                    />
                                </svg>
                            </SIconHolder>
                            <SHeading class="tex-[18px] py-2 leading-6 tracking-[0.02em]" color="secondary"> Statistical Information </SHeading>
                            <p class="text-sm md:font-medium">We shall provide detailed statistical information to park owners.</p>
                        </div>
                        <div>
                            <SIconHolder>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19.34 14.49L18.34 12.83C18.13 12.46 17.94 11.76 17.94 11.35V8.82C17.94 6.47 16.56 4.44 14.57 3.49C14.05 2.57 13.09 2 11.99 2C10.9 2 9.92 2.59 9.4 3.52C7.45 4.49 6.1 6.5 6.1 8.82V11.35C6.1 11.76 5.91 12.46 5.7 12.82L4.69 14.49C4.29 15.16 4.2 15.9 4.45 16.58C4.69 17.25 5.26 17.77 6 18.02C7.94 18.68 9.98 19 12.02 19C14.06 19 16.1 18.68 18.04 18.03C18.74 17.8 19.28 17.27 19.54 16.58C19.8 15.89 19.73 15.13 19.34 14.49Z"
                                        fill="#FF754F"
                                    />
                                    <path
                                        d="M14.83 20.01C14.41 21.17 13.3 22 12 22C11.21 22 10.43 21.68 9.87999 21.11C9.55999 20.81 9.31999 20.41 9.17999 20C9.30999 20.02 9.43999 20.03 9.57999 20.05C9.80999 20.08 10.05 20.11 10.29 20.13C10.86 20.18 11.44 20.21 12.02 20.21C12.59 20.21 13.16 20.18 13.72 20.13C13.93 20.11 14.14 20.1 14.34 20.07C14.5 20.05 14.66 20.03 14.83 20.01Z"
                                        fill="#FF754F"
                                    />
                                </svg>
                            </SIconHolder>
                            <SHeading class="tex-[18px] py-2 leading-6 tracking-[0.02em]" color="secondary"> Notifications </SHeading>
                            <p class="text-sm md:font-medium">We shall provide instant notifications suggesting nearby parks with available slots.</p>
                        </div>
                        <div>
                            <SIconHolder>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M21.3 12.23H17.82C16.84 12.23 15.97 12.77 15.53 13.65L14.69 15.31C14.49 15.71 14.09 15.96 13.65 15.96H10.37C10.06 15.96 9.62 15.89 9.33 15.31L8.49 13.66C8.05 12.79 7.17 12.24 6.2 12.24H2.7C2.31 12.24 2 12.55 2 12.94V16.2C2 19.83 4.18 22 7.82 22H16.2C19.63 22 21.74 20.12 22 16.78V12.93C22 12.55 21.69 12.23 21.3 12.23Z"
                                        fill="#FF754F"
                                    />
                                    <path
                                        d="M12.75 3.80999L13.47 4.52999C13.62 4.67999 13.81 4.74999 14 4.74999C14.19 4.74999 14.38 4.67999 14.53 4.52999C14.82 4.23999 14.82 3.75999 14.53 3.46999L12.53 1.46999C12.52 1.45999 12.51 1.45999 12.51 1.44999C12.45 1.38999 12.37 1.33999 12.29 1.29999C12.28 1.29999 12.28 1.29999 12.27 1.28999C12.19 1.25999 12.11 1.24999 12.03 1.23999C12 1.23999 11.98 1.23999 11.95 1.23999C11.89 1.23999 11.83 1.25999 11.77 1.27999C11.74 1.28999 11.72 1.29999 11.7 1.30999C11.62 1.34999 11.54 1.38999 11.48 1.45999L9.48001 3.45999C9.19001 3.74999 9.19001 4.22999 9.48001 4.51999C9.77001 4.80999 10.25 4.80999 10.54 4.51999L11.26 3.79999V4.99999H12.76V3.80999H12.75Z"
                                        fill="#FF754F"
                                    />
                                    <path
                                        d="M22 10.81V10.85C21.78 10.77 21.54 10.73 21.3 10.73H17.82C16.27 10.73 14.88 11.59 14.19 12.97L13.44 14.45H10.58L9.83 12.98C9.14 11.59 7.75 10.73 6.2 10.73H2.7C2.46 10.73 2.22 10.77 2 10.85V10.81C2 7.17 4.17 5 7.81 5H11.25V9C11.25 9.41 11.59 9.75 12 9.75C12.41 9.75 12.75 9.41 12.75 9V5H16.19C19.83 5 22 7.17 22 10.81Z"
                                        fill="#FF754F"
                                    />
                                </svg>
                            </SIconHolder>
                            <SHeading class="tex-[18px] py-2 leading-6 tracking-[0.02em]" color="secondary"> Requesting a park </SHeading>
                            <p class="text-sm md:font-medium">Our users will have an option to request a parking in a given location through the mobile app.</p>
                        </div>
                        <div>
                            <SIconHolder>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19.17 6.64002C18.74 4.47002 17.13 3.52002 14.89 3.52002H6.10999C3.46999 3.52002 1.70999 4.84002 1.70999 7.92002V13.07C1.70999 15.29 2.61999 16.59 4.11999 17.15C4.33999 17.23 4.57999 17.3 4.82999 17.34C5.22999 17.43 5.65999 17.47 6.10999 17.47H14.9C17.54 17.47 19.3 16.15 19.3 13.07V7.92002C19.3 7.45002 19.26 7.03002 19.17 6.64002ZM5.52999 12C5.52999 12.41 5.18999 12.75 4.77999 12.75C4.36999 12.75 4.02999 12.41 4.02999 12V9.00002C4.02999 8.59002 4.36999 8.25002 4.77999 8.25002C5.18999 8.25002 5.52999 8.59002 5.52999 9.00002V12ZM10.5 13.14C9.03999 13.14 7.85999 11.96 7.85999 10.5C7.85999 9.04002 9.03999 7.86002 10.5 7.86002C11.96 7.86002 13.14 9.04002 13.14 10.5C13.14 11.96 11.96 13.14 10.5 13.14ZM16.96 12C16.96 12.41 16.62 12.75 16.21 12.75C15.8 12.75 15.46 12.41 15.46 12V9.00002C15.46 8.59002 15.8 8.25002 16.21 8.25002C16.62 8.25002 16.96 8.59002 16.96 9.00002V12Z"
                                        fill="#FF754F"
                                    />
                                    <path
                                        d="M22.3 10.92V16.07C22.3 19.15 20.54 20.48 17.89 20.48H9.11001C8.36001 20.48 7.69001 20.37 7.11001 20.15C6.64001 19.98 6.23001 19.73 5.90001 19.41C5.72001 19.24 5.86001 18.97 6.11001 18.97H14.89C18.59 18.97 20.79 16.77 20.79 13.08V7.92003C20.79 7.68003 21.06 7.53003 21.23 7.71003C21.91 8.43003 22.3 9.48003 22.3 10.92Z"
                                        fill="#FF754F"
                                    />
                                </svg>
                            </SIconHolder>
                            <SHeading class="tex-[18px] py-2 leading-6 tracking-[0.02em]" color="secondary"> Instant Payment </SHeading>
                            <p class="text-sm md:font-medium">The user will be able to pay the parking charges via StunCard or our mobile app</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <footer class="bg-primary px-6 md:px-4">
            <div class="max-w-[1220px] m-auto">
                <div class="md:grid md:grid-cols-2 justify-between pt-[1rem] md:pt-[7.625rem] pb-[1rem] md:pb-[4.375rem]">
                    <div class="max-w-[445px] flex-1">
                        <SHeading color="white" class="text-[2rem] md:text-[88px] md:leading-[108px]" weight="semibold">Let’s have a chat.</SHeading>
                        <div class="flex text-white md:space-x-8 md:pt-[2.563rem]">
                            <a class="md:scale-0 flex md:space-x-2 items-center justify-start" href="https://twitter.com/stun_park" target="_blank">
                                <span class="scale-50 border-2 border-b-white p-2 rounded-full"
                                    ><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.5 16.5L16.5 1.5M16.5 1.5H5.25M16.5 1.5V12.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                                <span class="">Twitter</span>
                            </a>
                            <a class="md:scale-0 flex md:space-x-2 items-center" href="" target="_blank">
                                <span class="scale-50 border-2 border-b-white p-2 rounded-full"
                                    ><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.5 16.5L16.5 1.5M16.5 1.5H5.25M16.5 1.5V12.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                                <span class="">Linkedin</span>
                            </a>
                            <a class="md:scale-0 flex md:space-x-2 items-center" href="mailto:stunnity.co@gmail.com" target="_blank">
                                <span class="scale-50 border-2 border-b-white p-2 rounded-full"
                                    ><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.5 16.5L16.5 1.5M16.5 1.5H5.25M16.5 1.5V12.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                                <span class="">Mail</span>
                            </a>
                        </div>
                    </div>
                    <form class="flex-1 pt-10 md:pt-0">
                        <div class="space-y-4 md:flex md:space-x-2">
                            <SInput required class="placeholder-white" type="text" placeholder="Name" />
                            <SInput required placeholder-color="white" type="email" placeholder="Email Address" />
                        </div>
                        <div class="pt-4 md:pt-12">
                            <STextArea required rows="4" placeholder="Message" class="resize-none placeholder-white" />
                        </div>
                        <div class="py-2">
                            <SButton type="submit" appearance="secondary" class="w-full">
                                <div class="flex justify-center space-x-2">
                                    <span>
                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4 9.99998H11.5M4 9.99998L1.269 1.12598C7.80181 3.02565 13.9623 6.02677 19.485 9.99998C13.9627 13.9738 7.80257 16.9755 1.27 18.876L3.999 9.99998H4Z"
                                                stroke="black"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </span>
                                    <span>Send Message </span>
                                </div>
                            </SButton>
                        </div>
                    </form>
                </div>
                <div class="border-t-2 border-t-white/20"><p class="pb-[3.125rem] pt-[1.5rem] text-sm md:text-base text-white">© 2022 . Copyright, All Rights are reserved</p></div>
            </div>
        </footer>
    </div>
</template>
