"use client";

import React, { useState } from "react";

import Fixtures from "../../components/03-organisms/fixtures/fixtures";

export default async function Page({ params }) {
    return (
        <>
            <div className="bg-grey py-8 rounded-bl-2xl rounded-br-2xl">
                <h1>Matches</h1>
            </div>

            <Fixtures />
        </>
    )
}