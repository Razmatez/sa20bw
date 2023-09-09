"use client";
import Fixtures from "../../components/03-organisms/fixtures/fixtures";

export default async function Page({ params }) {
    return (
        <>
            <div className="bg-grey py-8 rounded-bl-2xl rounded-br-2xl mt-36">
                <h1>Matches</h1>
            </div>

            <Fixtures />
        </>
    )
}