package it.mainPr.dto.diaryDto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import it.mainPr.dto.bookDto.BookResponseDto;
import it.mainPr.dto.heartDto.HeartResponseDto;
import it.mainPr.dto.commentDto.CommentsDto;
import it.mainPr.dto.memberDto.MemberResponseDto;
import it.mainPr.model.Diary;
import it.mainPr.model.Member;
import lombok.*;
import org.springframework.validation.annotation.Validated;

import javax.validation.constraints.NotBlank;
import java.util.List;

@Validated
public class DiariesDto {

    @Getter
    @NoArgsConstructor
    public static class PostDto {
        @NotBlank
        String diary_title;
        String diary_subtitle;
        @NotBlank
        String content;
        String diaryImgUrl;
        Member member;
        Integer total_heart;
        Integer total_follow;

        @Builder
        public PostDto(String diary_title, String diary_subtitle, String content, String diaryImgUrl, Member member, Integer total_heart, Integer total_follow) {
            this.diary_title = diary_title;
            this.diary_subtitle = diary_subtitle;
            this.content = content;
            this.diaryImgUrl = diaryImgUrl;
            this.member = member;
            this.total_heart = total_heart;
            this.total_follow = total_follow;
        }
    }

    @Getter
    @NoArgsConstructor
    public static class PatchDto {
        private Long diaryId;
        private String title;
        private String subtitle;
        private String content;

        private String information;
        private String diaryImgUrl;

        public void setDiaryId(long diaryId) {
            this.diaryId = diaryId;
        }

        @Builder
        public PatchDto(Long diaryId, String title, String subtitle, String content, String information, String diaryImgUrl) {
            this.diaryId = diaryId;
            this.title = title;
            this.subtitle = subtitle;
            this.content = content;
            this.information = information;
            this.diaryImgUrl = diaryImgUrl;
        }
    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class DiaryResponseDto {
        private Long diaryId;
        private String diary_title;
        private String diary_subtitle;
        private String content;
        private String diaryImgUrl;
        private String total_hearts;
        private String total_comments;
        private Member member;
        private List<CommentsDto.ResponseDto> comments;
        private List<HeartResponseDto> hearts;
        private Diary.Category category;
        private List<BookResponseDto> books;

    }
}