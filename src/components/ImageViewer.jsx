import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useContext } from "react";
import DataContext from "../context/DataContext";


function ImageViewer({ className }) {
    const { handleCloseDialog, openDialog, viewerImage } = useContext(DataContext);
    return (
        <>
            {
                viewerImage && (
                    <Modal
                        open={openDialog}
                        onClose={handleCloseDialog}
                        closeAfterTransition
                        slotProps={{
                            backdrop: {
                                timeout: 500,
                            },
                        }}
                        disableAutoFocus
                    >
                        <Fade in={open}>
                            <div
                                className={` md:w-fit sm:w-fit rounded-lg overflow-y-auto  absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ${className} bg-red-400`}
                            >
                                <img src={viewerImage || ""} alt="prompt preview image" />
                            </div>
                        </Fade>
                    </Modal>)
            }
        </>
    );
}

export default ImageViewer;

