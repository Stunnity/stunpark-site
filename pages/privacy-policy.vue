<script lang="ts" setup>
useHead({
    title: "StunPark Mobile App | Privacy Policy ",
})

defineOgImage({
    component: "MainTemplate",
})
</script>

<template>
    <main>
    
        <header class="py-8 md:py-16 px-4 md:px-0">
            <SNav>
                <template #action>
                    <SButton>Join Private Beta</SButton>
                </template>
            </SNav>
        </header>
        <section class="text-grey max-w-[57rem] m-auto px-6 pb-20">
            <h1 class="text-primary text-[2rem] font-bold">Privacy Policy</h1>
            <p class="py-4 text-black">Last updated: June 2023</p>

            <p class="text-grey py-4">
                Thank you for using stun-park ("App")! this privacy policy explains how we collect, use, and safeguard your personal information when you use our App. we are committed to protecting
                your privacy and ensuring the security of your information. by using the App, you consent to the practices described in this privacy Policy./p>
            </p>

            <h3 class="text-primary font-semibold py-4">1. Information We Collect</h3>

            <p class="py-3">
                <strong class="text-black">1.1. Personal Information:</strong> When you use our App, we may collect certain personally identifiable information, such as your name, email address, and
                phone number. We only collect this information when you voluntarily provide it to us, such as when creating an account or contacting our support team.
            </p>
            <p class="py-3">
                <strong class="text-black">1.2. Location Information:</strong> Our App utilizes location services to provide you with parking spot information and navigation. We may collect and
                process information about your device's precise geolocation when you use our App, with your consent. This information is used solely to enhance your user experience and provide you
                with relevant parking spot suggestions and directions.
            </p>

            <h3 class="text-primary font-semibold py-4">2. How we Use Your Information</h3>

            <div class="py-3">
                <strong class="text-black">2.1. Personal Information:</strong> We may use your personal information to:
                <ul>
                    <li>Provide and improve our App's functionality and services</li>
                    <li>Personalize your experience and tailor content to your preferences</li>
                    <li>Communicate with you regarding updates, changes, or important notices</li>
                    <li>Respond to your inquiries and provide customer support</li>
                </ul>
            </div>
            <div class="py-3">
                <strong class="text-black">2.2. Location Information:</strong> The location information we collect is used to:

                <ul>
                    <li>Enable location-based features and services within the App, such as finding nearby parking spots</li>
                    <li>Customize content and recommendations based on your location</li>
                    <li>Analyze user trends and behavior to improve our services</li>
                </ul>
            </div>

            <h3 class="text-primary font-semibold py-4">3. Sharing Your Information</h3>

            <div class="py-3">
                <span class="text-black">3.1 We may share your personal information in the following circumstances:</span>
                <ul>
                    <li><span class="text-black">Legal requirements:</span>We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
                </ul>
            </div>

            <h3 class="text-primary font-semibold py-4">4. Data Security</h3>

            <p class="py-3">
                We take reasonable measures to protect the security of your personal information and prevent unauthorized access, disclosure, or alteration. However, please note that no method of
                transmission over the internet or electronic storage is completely secure. We cannot guarantee the absolute security of your data.
            </p>

            <h3 class="text-black font-semibold pt-3">4.1. Your choices your rights</h3>
            <p>
                You have certain rights regarding your personal information, including the right to access, update, and delete your information. If you would like to exercise any of these rights or
                have any concerns about your privacy, please contact us at [contact email or address]
            </p>
            <h3 class="text-black font-semibold pt-3">4.2. Changes to This Privacy Policy</h3>
            <p>
                We reserve the right to update or modify this Privacy Policy at any time. We will notify you of any changes by posting the updated Privacy Policy within the App or through other
                communication channels. Your continued use of the App after any modifications indicate your acceptance of the revised Privacy Policy.
            </p>
            <h3 class="text-black font-semibold pt-3">4.3. Contact Us</h3>
            <p>
                If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at [contact email or address]. Remember to review and customize the privacy
                policy copy to accurately reflect your app's practices and consult with legal professionals or privacy experts to ensure compliance with applicable laws and regulations.
            </p>
        </section>
    </main>
</template>
