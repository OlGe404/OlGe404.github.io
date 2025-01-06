const content_to_merge = [docs[i].content, docs[i].labels];
docs[i].content = content_to_merge.join(' ');
