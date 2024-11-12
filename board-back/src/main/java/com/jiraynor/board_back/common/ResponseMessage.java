package com.jiraynor.board_back.common;

public interface ResponseMessage {

    // HTTP Status 200
    public static final String SUCCESS = "Success.";

    // HTTP Status 400
    String VALIDATION_FAILED = "Validation failed.";
    String DUPLICATE_EMAIL = "Duplicate email.";
    String DUPLICATE_NICKNAME = "Duplicate nickname."; // 우리 전화번호는 필요 없는 것 같아서 TEL_NUMBER는 뺐어요
    String NOT_EXISTED_USER = "This user does not exist.";
    String NOT_EXISTED_BOARD = "This board does not exist.";
    String INVALID_RATING = "Invalid rating. Rating must be between 1 and 5.";

    // HTTP Status 401
    String SIGN_IN_FAIL = "Login information mismatch.";
    String AUTHORIZATION_FAIL = "Authorization Failed.";

    // HTTP Status 403
    String NO_PERMISSION = "Do not have permission.";

    // HTTP Status 500
    String DATABASE_ERROR = "Database error.";
}
