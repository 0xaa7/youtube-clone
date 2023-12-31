import React from 'react';
import { stack, Box, Stack } from '@mui/material';
import { VideoCard, ChannelCard } from './'

const Videos = ({ videos }) => {
 
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
       {videos.map((item, i) => (
        <Box key={i}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}

        </Box>
       ))}
    </Stack>
  );
}

export default Videos;
