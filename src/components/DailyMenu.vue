<script setup></script>

<template>
    <div class="bg-[#1f0f03] space-y-8 py-20">
        <h2 class="text-center text-white text-4xl font-bold">Menu du jour</h2>
        <div class="flex justify-center space-x-8">
            <div class="relative">
                <div class="h-[100px] w-[100px] rounded-full absolute -top-10 -left-10 pattern"></div>
                <div class="card relative">
                    <div class="space-y-4 p-8 bg-white relative overflow-hidden">
                        <div class="h-7 w-7 bg-black absolute rounded-full -top-3 -left-3"></div>
                        <div class="h-10 w-10 bg-black absolute rounded-full -top-8 -right-5"></div>
                        <div class="h-7 w-7 bg-black absolute rounded-full -bottom-3 -left-3"></div>
                        <div class="h-7 w-7 bg-black absolute rounded-full -bottom-3 -right-3"></div>
                        <div class="flex justify-between">
                            <h3 class="">American Combo Menu</h3>
                            <p class="text-[#c49c5e]">2000 F</p>
                        </div>
                        <div class="w-full bg-black h-[1px]"></div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

                        <div class="flex justify-between">
                            <h3 class="">Strawberry Jam French Toast</h3>
                            <p class="text-[#c49c5e]">2000 F</p>
                        </div>
                        <div class="w-full bg-black h-[1px]"></div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

                        <div class="flex justify-between">
                            <h3 class="">Optic Big Breakfast Combo Menu</h3>
                            <p class="text-[#c49c5e]">2000 F</p>
                        </div>
                        <div class="w-full bg-black h-[1px]"></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>

            <div class="card relative">
                <div class="space-y-4 p-8 bg-white relative overflow-hidden">
                    <div class="h-10 w-10 bg-black absolute rounded-full -top-4 -left-5"></div>
                    <div class="h-7 w-7 bg-black absolute rounded-full -top-6 -right-3"></div>
                    <div class="h-7 w-7 bg-black absolute rounded-full -bottom-3 -left-3"></div>
                    <div class="h-7 w-7 bg-black absolute rounded-full -bottom-3 -right-3"></div>
                    <div class="flex justify-between">
                        <h3 class="">American Combo Menu</h3>
                        <p class="text-[#c49c5e]">2000 F</p>
                    </div>
                    <div class="w-full bg-black h-[1px]"></div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

                    <div class="flex justify-between">
                        <h3 class="">Strawberry Jam French Toast</h3>
                        <p class="text-[#c49c5e]">2000 F</p>
                    </div>
                    <div class="w-full bg-black h-[1px]"></div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

                    <div class="flex justify-between">
                        <h3 class="">Optic Big Breakfast Combo Menu</h3>
                        <p class="text-[#c49c5e]">2000 F</p>
                    </div>
                    <div class="w-full bg-black h-[1px]"></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>            
            </div>
        </div>
    </div>
</template>

<style scoped>
.pattern{
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.5'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    z-index: 1;
}

/* Pointe du haut */
.card::after {
    content: "";
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid white;
}

/* Pointe du bas */
.card::before {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid white;
}
</style>