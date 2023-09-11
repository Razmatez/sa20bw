"use client";
import Fixtures from "../../components/03-organisms/fixtures/fixtures";

export default async function Page({ params }) {
    return (
        <>
            <div className="container mx-auto bg-grey py-8 rounded-bl-2xl rounded-br-2xl mt-15 lg:mt-36">
                <h1 className="pl-6 lg:pl-16">Matches</h1>
            </div>

            <Fixtures />
        </>
    )
}