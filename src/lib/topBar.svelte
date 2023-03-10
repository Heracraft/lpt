<script>
    import {username} from "../js/store"
</script>

<div class="flex justify-between items-center h-16 bg-cover" style="background-image: url('/pattern.svg');">
    <button type="button" class="ml-4 inline-flex items-center p-2 text-sm text-primary-500 rounded-lg hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-200 dark:text-primary-400 dark:hover:bg-primary-700 dark:focus:ring-primary-600" aria-controls="navbar-search" aria-expanded="false"><span class="sr-only">Open menu</span> <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg></button>
    <div class="flex items-center">
        <div class="flex items-center rounded-full text-primary-900 px-5 py-1 mx-2 font-semibold border-[1.5px] border-primary-800 hover:bg-primary-100 backdrop-blur-sm">
            <svg class="w-4 h-4" width="401" height="350" viewBox="0 0 401 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M400.241 86.38C400.701 90.18 400.962 94.029 400.962 97.949C400.962 117.46 396.972 135.3 389.802 152.139C379.892 175.389 363.902 196.729 343.922 217.899C323.651 239.369 299.291 260.679 272.991 283.649C249.802 303.919 225.111 325.489 200.421 349.619L200.481 258.86L173.3 213.56L227.66 159.19L164.23 113.88L195.839 68.58C220.9 19.6 250.529 0 300.64 0C352.061 0 394.381 37.76 400.241 86.38Z" fill="#EF3E5C"/>
                <path d="M217.932 332.904L217.981 259.533L190.8 214.233L245.16 159.863L181.73 114.553L213.339 69.253C237.516 21.999 265.952 2.098 312.923 0.752998C308.895 0.272998 304.801 0 300.64 0C250.53 0 220.9 19.6 195.839 68.58L164.23 113.88L227.66 159.19L173.3 213.56L200.481 258.86L200.42 349.62C206.265 343.909 212.108 338.345 217.932 332.904Z" fill="#D83659"/>
                <path d="M46.441 258.86C56.451 258.86 64.5611 266.98 64.5611 276.99C64.5611 287 56.451 295.11 46.441 295.11C36.431 295.11 28.321 287 28.321 276.99C28.321 266.98 36.431 258.86 46.441 258.86Z" fill="#BE0000"/>
                <path d="M33.321 286.99C33.321 276.98 41.431 268.86 51.441 268.86C56.488 268.86 61.048 270.927 64.334 274.257C63.014 265.546 55.521 258.86 46.441 258.86C36.431 258.86 28.321 266.98 28.321 276.99C28.321 281.952 30.318 286.444 33.548 289.716C33.413 288.825 33.321 287.918 33.321 286.99Z" fill="#A10000"/>
                <path d="M227.661 159.19L173.301 213.56L200.481 258.86L200.42 349.62C175.74 325.49 151.05 303.92 127.87 283.65C101.59 260.68 77.24 239.37 56.99 217.9C37.02 196.73 21.05 175.39 11.15 152.14C3.99 135.3 0 117.46 0 97.95C0 94.03 0.260001 90.18 0.721001 86.381C6.58 37.761 48.891 0.000999451 100.21 0.000999451C150.32 0.000999451 170.79 19.601 195.84 68.581L164.231 113.881L227.661 159.19Z" fill="#BE0000"/>
                <path d="M152.371 292.77C126.091 269.8 101.741 248.49 81.491 227.02C61.521 205.85 45.551 184.51 35.651 161.26C28.491 144.42 24.501 126.58 24.501 107.07C24.501 103.15 24.761 99.3 25.222 95.501C31.081 46.881 73.392 9.12099 124.711 9.12099C134.389 9.12099 142.952 9.861 150.665 11.393C137.447 3.559 121.513 0 100.211 0C48.892 0 6.58098 37.76 0.721977 86.38C0.260977 90.18 0.000976562 94.029 0.000976562 97.949C0.000976562 117.46 3.99097 135.3 11.151 152.139C21.05 175.389 37.021 196.729 56.991 217.899C77.241 239.369 101.591 260.679 127.871 283.649C151.051 303.919 175.741 325.489 200.421 349.619L200.431 335.546C184.039 320.457 167.867 306.32 152.371 292.77Z" fill="#A10000"/>
                <path d="M326.871 311.36C336.882 311.36 344.991 319.48 344.991 329.49C344.991 339.5 336.882 347.61 326.871 347.61C316.861 347.61 308.751 339.5 308.751 329.49C308.751 319.48 316.861 311.36 326.871 311.36Z" fill="#EF3E5C"/>
                <path d="M313.751 339.49C313.751 329.48 321.861 321.36 331.871 321.36C336.919 321.36 341.478 323.427 344.764 326.757C343.445 318.046 335.951 311.36 326.871 311.36C316.861 311.36 308.751 319.48 308.751 329.49C308.751 334.452 310.748 338.944 313.978 342.216C313.842 341.325 313.751 340.418 313.751 339.49Z" fill="#D83659"/>
                <path d="M331.871 100.76C329.109 100.76 326.871 98.521 326.871 95.76V68.58C326.871 65.818 329.109 63.58 331.871 63.58C334.633 63.58 336.871 65.818 336.871 68.58V95.76C336.871 98.521 334.632 100.76 331.871 100.76Z" fill="#FFC230"/>
                <path d="M345.461 87.17H318.281C315.519 87.17 313.281 84.931 313.281 82.17C313.281 79.408 315.519 77.17 318.281 77.17H345.462C348.224 77.17 350.462 79.408 350.462 82.17C350.461 84.931 348.223 87.17 345.461 87.17Z" fill="#FFC230"/>
            </svg>
            <span class="flex items-center child:!my-0">
               6
            </span>
            </div>
        <div class="flex items-center rounded-full text-primary-900 px-5 py-1 mx-2 font-semibold border-[1.5px] border-primary-800 hover:bg-primary-100 backdrop-blur-sm">
            <img class="w-5 h-5" src="/star.svg" alt="star">
            <span class="flex items-center child:!my-0">
                124
            </span>
            </div>
        <div class="flex items-center rounded-full text-primary-900 px-5 py-1 mx-2 font-semibold border-[1.5px] border-primary-800 hover:bg-primary-100 backdrop-blur-sm">
            <img class="w-4 h-4" src="/trophy.svg" alt="">
            <span class="flex items-center child:!my-0">
               12
            </span>
            </div>
    </div>
        
    <div class="relative inline-flex items-center justify-center w-10 h-10 bg-primary-100 shadow rounded-full dark:bg-primary-600">
        <span class="font-medium text-primary-900 dark:text-primary-300 uppercase">{$username.toString()[0]}</span>
        <p class="absolute flex justify-center items-center top-[-10%] w-5 h-5 left-0 bg-primary text-white rounded-full text-xs">12</p>

    </div>

        
</div>