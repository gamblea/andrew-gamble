import os
import pathlib
import json
from PIL import Image 

S3_BASE_PATH = "https://s3-us-west-1.amazonaws.com/www.andrewgamble.ca/posts/"

def main():
    parent_path = pathlib.Path(__file__).parent
    posts_path = os.path.join(parent_path, "posts")


    posts = []
    for root, dirs, files in os.walk(posts_path, topdown=False):
        post_name = os.path.basename(os.path.normpath(root))
        urls = []
        post = {}

        config_file = "post.json"
        config_path = os.path.join(root,config_file)
        if os.path.exists(config_path):
            with open(config_path) as json_file:
                data = json.load(json_file)
                post.update(data)

        for file_name in files:
            if file_name.endswith(".jpg"):
                im = Image.open(os.path.join(root, file_name))
                width, height = im.size

                if width > height:
                    width =  4
                    height = 3
                elif width == height:
                    width = 1
                    height = 1
                else:
                    width = 3
                    height = 4
                
                file_uri = os.path.join(S3_BASE_PATH, post_name, file_name)
                if "feature_img" in post and post["feature_img"] == file_name:
                    post["feature_img_uri"] = file_uri

                urls.append({
                        "src": file_uri,
                        "width": width,
                        "height": height,
                    })

        if urls:
            post["photos"] = urls

        if "postId" in post:
            posts.append(post)

    with open('posts.json', 'w', encoding='utf-8') as f:
        json.dump(posts, f, ensure_ascii=False, indent=4)



if __name__ == "__main__":
    main()

