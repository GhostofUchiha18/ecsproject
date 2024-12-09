import React from "react";

function Footer() {
  return(
   <>
   

<footer class="bg-gray-800 shadow hidden sm:block">
    <div class="w-full max-w-screen-xl mx-auto p-4">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="./images/logo.png" class="h-10" alt="" />
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 bg-slate-50 sm:mx-auto lg:my-8" />
        <span class="block text-sm text-white sm:text-cente">© 2023 <a href="#" class="hover:underline">ECS Nepal</a>. All Rights Reserved.</span>
    </div>
</footer>




   </>
   );
}

export default Footer;
