"use client" 

import * as React from "react"

import { Button } from "./button";
import { Menu, ArrowRight, X, Command, Circle } from "lucide-react";
import { useState, useEffect } from "react";

function HeroModern() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX / window.innerWidth,
                y: e.clientY / window.innerHeight,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="relative min-h-screen bg-white dark:bg-black text-black dark:text-white overflow-hidden">
            <div
                className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5 
                dark:from-emerald-500/10 dark:via-transparent dark:to-blue-500/10 blur-3xl"
                style={{
                    transform: `translate(${(mousePosition.x - 0.5) * 20}%, ${
                        (mousePosition.y - 0.5) * 20
                    }%)`,
                }}
            />

            <div className="absolute inset-0">
                <div
                    className="absolute top-1/4 left-1/4 w-64 h-64 border border-black/5 dark:border-white/10 
                    rounded-full animate-[spin_20s_linear_infinite]"
                />
                <div
                    className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-black/5 dark:border-white/10 
                    rounded-full animate-[spin_15s_linear_infinite_reverse]"
                />
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 
                    border border-black/5 dark:border-white/10 rounded-full animate-[spin_25s_linear_infinite]"
                />
            </div>

            <nav className="relative z-10">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between h-24">
                        <a
                            href="https://kokonutui.com/"
                            className="flex items-center gap-3"
                        >
                            <Command
                                className="h-5 w-5 text-emerald-500"
                                strokeWidth={1.5}
                            />
                            <span className="text-xl font-light tracking-wide">
                                kokonut
                            </span>
                        </a>

                        <div className="hidden md:flex items-center gap-12">
                            {["Components", "Templates", "Pricing", "Docs"].map(
                                (item) => (
                                    <a
                                        key={item}
                                        href="#"
                                        className="text-sm text-black/60 dark:text-white/70 hover:text-black 
                                        dark:hover:text-white transition-colors relative group"
                                    >
                                        {item}
                                        <span
                                            className="absolute -bottom-1 left-0 w-2 h-px bg-emerald-500/50 
                                            transition-all group-hover:w-full"
                                        />
                                    </a>
                                )
                            )}
                            <Button
                                className="h-10 px-6 bg-emerald-500 hover:bg-emerald-600 text-white 
                                transition-colors"
                            >
                                Get Started
                            </Button>
                        </div>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? (
                                <X className="h-5 w-5" />
                            ) : (
                                <Menu className="h-5 w-5" />
                            )}
                        </Button>
                    </div>
                </div>
            </nav>

            <main className="relative z-10">
                <div className="max-w-7xl mx-auto px-4 pt-20 lg:pt-32">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="space-y-8">
                                <div
                                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full 
                                    bg-emerald-500/10 border border-emerald-500/20"
                                >
                                    <Circle className="h-2 w-2 fill-emerald-500 animate-pulse" />
                                    <span className="text-sm font-light">
                                        New Components Added Weekly
                                    </span>
                                </div>

                                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tight leading-[0.9]">
                                    Hero from
                                    <span
                                        className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r 
                                        from-emerald-500 to-blue-500"
                                    >
                                        KokonutUI
                                    </span>
                                </h1>

                                <p className="text-lg text-black/60 dark:text-white/70 leading-relaxed max-w-lg font-light">
                                    Build stunning websites faster with our
                                    premium UI component library. Powered by
                                    Tailwind CSS and React, designed for modern
                                    web applications.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button className="h-12 px-8 bg-emerald-500 hover:bg-emerald-600 text-white group">
                                        Get Started
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="h-12 px-8 border-black/10 dark:border-white/10 
                                        hover:bg-black/5 dark:hover:bg-white/5"
                                    >
                                        View Components
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="relative lg:h-[600px]">
                            <div className="absolute inset-0">
                                <div className="relative h-full w-full">
                                    <div className="absolute inset-0 rounded-2xl overflow-hidden group">
                                        <div
                                            className="absolute inset-0 bg-gradient-to-tr from-white/80 via-white/50 
                                            to-transparent dark:from-black/80 dark:via-black/50 dark:to-transparent z-10"
                                        />

                                        {/* For next.js don't forget to allow image in your config */}
                                        <img
                                            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80"
                                            alt="Abstract Geometric Shapes"
                                            className="object-cover w-full h-full transform scale-105 
                                            group-hover:scale-100 transition-transform duration-700"
                                        />

                                        <div className="absolute top-8 right-8 z-20">
                                            <div
                                                className="w-24 h-24 border border-black/10 dark:border-white/20 
                                                rounded-full animate-[spin_20s_linear_infinite]"
                                            />
                                        </div>
                                        <div className="absolute bottom-8 left-8 z-20">
                                            <div
                                                className="w-16 h-16 border border-emerald-500/20 rounded-full 
                                                animate-[spin_15s_linear_infinite_reverse]"
                                            />
                                        </div>

                                        <div className="absolute left-1/2 bottom-8 -translate-x-1/2 z-20">
                                            <div
                                                className="px-6 py-4 rounded-xl bg-white/80 dark:bg-white/10 
                                                backdrop-blur-md border border-black/10 dark:border-white/20"
                                            >
                                                <p className="text-sm font-light">
                                                    Designed for the modern web
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <div className="relative z-10 mt-20 border-t border-black/10 dark:border-white/10 overflow-hidden">
                <div className="py-8 relative">
                    <div className="flex gap-8 animate-marquee whitespace-nowrap">
                        {[...Array(2)].map(() =>
                            [
                                "React",
                                "Tailwind",
                                "TypeScript",
                                "Components",
                                "Templates",
                                "UI Kit",
                            ].map((item, i) => (
                                <span
                                    key={i}
                                    className="text-5xl font-light text-black/10 dark:text-white/10"
                                >
                                    {item}
                                </span>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export { HeroModern }