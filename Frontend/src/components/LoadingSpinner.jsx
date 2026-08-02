import { Oval } from "react-loader-spinner";

function LoadingSpinner() {

    return (

        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "70vh"
            }}
        >

            <Oval
                height={70}
                width={70}
                color="#1976d2"
                secondaryColor="#90caf9"
                strokeWidth={5}
                visible={true}
            />

        </div>

    );

}

export default LoadingSpinner;