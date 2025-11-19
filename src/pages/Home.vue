<template>
    <div
        class="min-h-screen bg-gradient-to-b from-black via-neutral-950 to-black text-slate-100 flex items-center justify-center px-4">
        <div class="max-w-2xl w-full text-center">
            <!-- Small badge -->
            <div
                class="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-medium rounded-full border border-white/10 bg-white/5 backdrop-blur">
                <span class="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>SmartOdds.app • Browser extension for value bettors</span>
            </div>

            <!-- Brand + main headline -->
            <h1 class="text-sm tracking-[0.25em] uppercase text-slate-400 mb-2">
                SmartOdds
            </h1>

            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
                Spot profitable odds instantly—right while you browse
            </h2>

            <!-- Subheadline -->
            <p class="text-sm sm:text-base lg:text-lg text-slate-300 mb-8 leading-relaxed">
                SmartOdds.app overlays better bookmaker odds directly on the site you’re using—so you never miss a
                higher payout again.
            </p>

            <!-- CTA row (kept minimal) -->
            <div class="flex flex-col items-center justify-center gap-3">
                <a href="#" class="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold
                 bg-emerald-500 hover:bg-emerald-400 text-black shadow-lg shadow-emerald-500/30
                 transition-transform duration-150 hover:-translate-y-0.5">
                    Add SmartOdds to Chrome
                </a>
                <div class="text-xs sm:text-sm text-slate-400">
                    No signup. Setup in under 2 minutes.
                </div>
            </div>
        </div>

        <!-- Footer -->
        <app-footer
            component-style="text-slate-400 hover:text-slate-200 transition-colors duration-200 font-medium underline"
            class="fixed bottom-0 left-0 m-3" text="&copy; by Solytics GmbH" url="https://www.solytics.de/#/" />
    </div>
</template>
<script setup>
import { AppFooter } from '@solytics/vue-footer-widgets';
</script>
