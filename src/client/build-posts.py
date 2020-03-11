import os
import pathlib
import json
from PIL import Image 

S3_BASE_PATH = "https://s3-us-west-1.amazonaws.com/www.andrewgamble.ca/posts/"

def main():
    parent_path = pathlib.Path(__file__).parent
    print()
    posts_path = os.path.join(parent_path, "posts")
    output_path = os.path.join(parent_path, "posts.json")

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
                long_edge = 4
                short_edge = 3
                if "override_dims" in post:
                    long_edge = post["override_dims"]["long"]
                    short_edge = post["override_dims"]["short"]
                if "custom_dims" in post and file_name in post["custom_dims"]:
                    width = post["custom_dims"][file_name]["width"]
                    height = post["custom_dims"][file_name]["height"]
                else:
                    im = Image.open(os.path.join(root, file_name))
                    width, height = im.size
                    if width > height:
                        width = long_edge
                        height = short_edge
                    elif width == height:
                        width = 1
                        height = 1
                    else:
                        width = short_edge
                        height = long_edge

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

    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(posts, f, ensure_ascii=False, indent=4)



if __name__ == "__main__":
    main()

