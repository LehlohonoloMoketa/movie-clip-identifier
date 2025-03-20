
import { useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, File, X, Play, Pause } from 'lucide-react';
import { toast } from 'sonner';
import LoadingAnimation from './LoadingAnimation';

const UploadSection = () => {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleDrag = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  }, []);

  const handleFile = (file: File) => {
    // Check if file is a video
    if (!file.type.match('video.*')) {
      toast.error('Please upload a video file');
      return;
    }
    
    // Check if file is too large (50MB limit)
    if (file.size > 50 * 1024 * 1024) {
      toast.error('File is too large. Please upload a video smaller than 50MB');
      return;
    }
    
    setFile(file);
    const url = URL.createObjectURL(file);
    setVideoSrc(url);
    toast.success('Video uploaded successfully');
  };

  const clearVideo = () => {
    if (videoSrc) {
      URL.revokeObjectURL(videoSrc);
    }
    setFile(null);
    setVideoSrc(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  const handleIdentify = () => {
    if (!file) {
      toast.error('Please upload a video first');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate processing with a timeout
    setTimeout(() => {
      setIsLoading(false);
      navigate('/result');
    }, 5000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto glass-panel rounded-xl p-6 md:p-8 animate-fade-in">
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <>
          {!videoSrc ? (
            <div 
              className={`drop-zone ${dragActive ? 'active' : ''}`}
              onDragEnter={handleDrag}
              onDragOver={handleDrag}
              onDragLeave={handleDrag}
              onDrop={handleDrop}
              onClick={() => inputRef.current?.click()}
            >
              <input 
                type="file" 
                id="file-upload" 
                className="hidden" 
                accept="video/*"
                onChange={handleChange}
                ref={inputRef}
              />
              
              <Upload className="h-10 w-10 mb-4 mx-auto text-muted-foreground" />
              
              <h3 className="text-lg font-medium mb-2">Upload your movie clip</h3>
              
              <p className="text-sm text-muted-foreground mb-4">
                Drag and drop your video file here, or click to browse
              </p>
              
              <p className="text-xs text-muted-foreground">
                Supported formats: MP4, MOV, AVI, WebM (Max 50MB)
              </p>
            </div>
          ) : (
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden relative group">
                <video 
                  ref={videoRef}
                  src={videoSrc} 
                  className="w-full h-full object-cover"
                  onEnded={handleVideoEnded}
                ></video>
                
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={togglePlayPause}
                    className="h-14 w-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 hover:scale-110"
                  >
                    {isPlaying ? (
                      <Pause className="h-6 w-6 text-white" />
                    ) : (
                      <Play className="h-6 w-6 text-white ml-1" />
                    )}
                  </button>
                </div>
              </div>
              
              <div className="flex items-center mt-4 gap-2">
                <div className="flex-1 flex items-center">
                  <File className="h-5 w-5 mr-2 text-muted-foreground" />
                  <p className="text-sm truncate">
                    {file?.name}
                  </p>
                </div>
                
                <button
                  onClick={clearVideo}
                  className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Remove video"
                >
                  <X className="h-5 w-5 text-muted-foreground" />
                </button>
              </div>
            </div>
          )}
          
          <button
            onClick={handleIdentify}
            disabled={!file}
            className={`w-full mt-6 btn-accent ${!file ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Identify Movie
          </button>
        </>
      )}
    </div>
  );
};

export default UploadSection;
