import Image from 'next/image';


const FileViewer = ({ file }) => {
    const isImage = /\.(jpeg|jpg|gif|png|webp|svg)$/.test(file);
    const isPDF = /\.pdf$/.test(file);

    // const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    // const src = isMobile ? `${file}#zoom=85` : file;
    // console.log(src);


    return (
        <div className="flex items-center gap-3 relative w-full h-full">
            {/* Image file */}
            {
                isImage && (
                    <Image
                        src = { file }
                        alt = "Image"
                        fill
                        className = "object-scale-down bg-primary"
                        unoptimized = { true }
                    />
                )
            }

            {/* PDF file */}
            {
                isPDF && (
                    <iframe
                        src = { file }
                        className = "object-scale-down w-full h-full"
                        style = {{
                            width: '100%',
                            border: 'none',
                            overflow: 'hidden',
                        }}
                    />
                )
            }
        </div>
    );
};


export default FileViewer;
