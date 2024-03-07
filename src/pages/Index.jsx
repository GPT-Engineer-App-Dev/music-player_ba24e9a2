import React from "react";
import { Box, Flex, Image, Text, Slider, SliderTrack, SliderFilledTrack, SliderThumb, IconButton, VStack, HStack } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward, FaVolumeUp, FaHeart } from "react-icons/fa";

const Index = () => {
  // Dummy song data
  const song = {
    title: "Song Title",
    artist: "Artist Name",
    album: "Album Name",
    cover: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbGJ1bSUyMGNvdmVyfGVufDB8fHx8MTcwOTgwNTA1Mnww&ixlib=rb-4.0.3&q=80&w=1080",
  };

  // Dummy state to simulate playing state
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [volume, setVolume] = React.useState(70);

  return (
    <VStack spacing={4} align="center" justify="center" height="100vh">
      <Image borderRadius="md" boxSize="300px" src={song.cover} alt={`Cover for the album ${song.album}`} />
      <VStack>
        <Text fontSize="2xl" fontWeight="bold">
          {song.title}
        </Text>
        <Text fontSize="md" color="gray.500">
          {song.artist}
        </Text>
      </VStack>
      <HStack>
        <IconButton aria-label="Previous song" icon={<FaBackward />} variant="ghost" />
        <IconButton aria-label={isPlaying ? "Pause" : "Play"} icon={isPlaying ? <FaPause /> : <FaPlay />} onClick={() => setIsPlaying(!isPlaying)} size="lg" colorScheme="blue" borderRadius="full" />
        <IconButton aria-label="Next song" icon={<FaForward />} variant="ghost" />
      </HStack>
      <Slider aria-label="song-progress" defaultValue={30}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Flex align="center" justify="space-between" width="100%">
        <IconButton aria-label="Favorite" icon={<FaHeart />} variant="ghost" />
        <HStack width="40%">
          <FaVolumeUp />
          <Slider aria-label="volume" defaultValue={70} onChange={(val) => setVolume(val)}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </HStack>
      </Flex>
    </VStack>
  );
};

export default Index;
