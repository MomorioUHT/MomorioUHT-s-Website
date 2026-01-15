import Layout from '../components/Layout';
import moon1 from "../assets/moon1.gif";

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../components/api/axios-api';
import { Fanart, PostApiResponse } from '../components/hook/hook';

function PostPage() {
    const postId = useParams<{ postId: string }>().postId;
    const [post, setPost] = useState<Fanart | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchPostData = async (id: string) => {
        try {
            const res = await api.get<PostApiResponse>(`/api/post/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (!res.data.success) {
                alert("Failed to fetch post: " + res.data.error);
            } else {
                console.log("Post data:", res.data.data);
            }

        } catch (error: any){
            console.error(error.message);
        } finally {
            setIsLoading(false);
        }
    }
    
    useEffect(() => {
        const reveals = document.querySelectorAll('.reveal');

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    // if the element is on screen
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            },
            { threshold: 0.1 } // < 10% of the element is visible
        );

        reveals.forEach(el => observer.observe(el));

        if (!postId) {
            alert("Invalid post ID");
        } else {
            fetchPostData(postId);
        }
    }, []);

    return (
        <Layout>
            <style>
                    {`
                        @import url('https://fonts.googleapis.com/css2?family=Silkscreen:wght@400;700&display=swap');

                        body {
                            margin: 0;
                            min-height: 100vh;
                            background-image: url(${moon1});
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                        .reveal {
                            opacity: 0;
                            transform: translateY(40px);
                            transition: all 0.6s ease;
                        }
                        .reveal.active {
                            opacity: 1;
                            transform: translateY(0);
                        }
                        .pixel-font {
                            font-family: "Silkscreen", sans-serif;
                        }
                    `}
            </style>

            {isLoading ? (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status"></div>
                </div>
            ) : (
                <div className="w-100 mt-4"> 
                    {post ? (
                        <div>
                            {/* POST HERE */}
                        </div>
                    ) : (
                        <div>
                            <h1 className="pixel-font mt-4">Post #{postId}</h1>
                            <p className="lead pixel-font">Post not found.</p>
                        </div>
                    )
                    }
                </div>
            )}

        </Layout>
    );
}

export default PostPage;
