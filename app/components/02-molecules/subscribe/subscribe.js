import Button from "../../01-atoms/button/button";
import Input from "../../01-atoms/input/input";
import Text from "../../01-atoms/text/text"

const Subscribe = () => {

    return (

        <div>

            <div className="pb-6 text-h4">

                <Text
                    content="Subscribe"
                />

            </div>

            <div className="flex">

                <Input
                    helperText={<>By subscribing you agree to with our <a className="ml-1 font-medium text-cyan-600 hover:underline text-gray-500" href="/forms">Terms of use</a>.</>}
                    placeholder="Enter your email"

                />

                <Button
                    isPrimary={false}
                    text=">"
                />

            </div>

        </div>

    )
}

export default Subscribe;